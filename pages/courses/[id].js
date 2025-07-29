// pages/courses/[id].js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Calendar from '../../components/Calendar';
import LessonList from '../../components/LessonList';
import { CourseContext } from '../../context/CourseContext';

export default function CoursePage() {
  const router = useRouter();
  const { id } = router.query;
  const { courses, lessons, setLessons } = useContext(CourseContext);

  const course = courses.find(c => c.id === id) || {};
  const courseLessons = lessons.filter(l => l.courseId === id);

  function handleCourseDrop(updatedEvents) {
    const other = lessons.filter(l => l.courseId !== id);
    const mapped = updatedEvents.map(evt => ({
      ...evt,
      courseId: id
    }));
    setLessons([...other, ...mapped]);
  }

  const handleDeleteLesson = (lessonId) => {
    setLessons(lessons.filter(l => l.id !== lessonId));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Lessons sidebar */}
        <aside className="lg:col-span-1 p-4 border-r lg:border-b-0 border-b">
          <h2 className="text-lg font-semibold mb-2">Lessons</h2>
          <LessonList
            lessons={courseLessons}
            onEdit={lesson => {
              router.push(`/courses/${id}/new-lesson?edit=${lesson.id}`);
            }}
            onDelete={handleDeleteLesson}
          />
          <Link
            href={`/courses/${id}/new-lesson`}
            className="mt-4 inline-block px-3 py-1 bg-green-500 text-white rounded"
          >
            + Add Lesson
          </Link>
        </aside>

        {/* Calendar main section */}
        <main className="lg:col-span-5 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">{course.title} Calendar</h1>
            <Link href="/" className="text-blue-600 hover:underline">
              Back to Dashboard
            </Link>
          </div>
          <Calendar lessons={courseLessons} onUpdate={handleCourseDrop} />
        </main>
      </div>
    </div>
  );
}

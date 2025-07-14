import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Calendar from '../../components/Calendar';
import LessonList from '../../components/LessonList';
import { CourseContext } from '../../context/CourseContext';

export default function CoursePage() {
  const router = useRouter();
  const { id } = router.query;
  const { courses, lessons } = useContext(CourseContext);
  const course = courses.find(c => c.id === id) || {};
  const courseLessons = lessons.filter(l => l.courseId === id);

  return (
    <div className="container mx-auto px-4 grid grid-cols-4 gap-6">
      {/* Lessons sidebar */}
      <aside className="col-span-1 p-4 border-r">
        <h2 className="text-lg font-semibold mb-2">Lessons</h2>
        <LessonList lessons={courseLessons} />
        <Link
          href={`/courses/${id}/new-lesson`}
          className="mt-4 inline-block px-3 py-1 bg-green-500 text-white rounded"
        >
          + Add Lesson
        </Link>
      </aside>

      {/* Calendar main section */}
      <main className="col-span-3 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">{course.title} Calendar</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </div>
        <Calendar lessons={courseLessons} />
      </main>
    </div>
  );
}

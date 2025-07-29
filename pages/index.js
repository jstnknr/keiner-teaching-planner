// pages/index.js
import Link from 'next/link';
import { useContext } from 'react';
import Calendar from '../components/Calendar';
import { CourseContext } from '../context/CourseContext';

export default function Home() {
  const { courses, lessons, setCourses, setLessons } = useContext(CourseContext);

  const handleDeleteCourse = (courseId, title) => {
    if (!confirm(`Delete course “${title}”? This will also remove its lessons.`)) return;
    setCourses(courses.filter(c => c.id !== courseId));
    setLessons(lessons.filter(l => l.courseId !== courseId));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Courses sidebar */}
        <aside className="lg:col-span-1 p-4 border-r lg:border-b-0 border-b">
          <h2 className="text-lg font-semibold mb-2">Courses</h2>
          <ul>
            {courses.map(c => (
              <li
                key={c.id}
                className="flex justify-between items-center py-1 hover:bg-gray-50"
              >
                <Link
                  href={`/courses/${c.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {c.title}
                </Link>
                <button
                  onClick={() => handleDeleteCourse(c.id, c.title)}
                  className="text-red-500 hover:text-red-700 ml-2 text-sm p-1"
                  aria-label={`Delete course ${c.title}`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <Link
            href="/courses/new"
            className="mt-4 inline-block px-3 py-1 bg-blue-500 text-white rounded"
          >
            + New Course
          </Link>
        </aside>

        {/* Calendar main section */}
        <main className="lg:col-span-5 p-4">
          <h1 className="text-xl font-semibold mb-4">All Lessons</h1>
          <Calendar lessons={lessons} onUpdate={setLessons} />
        </main>
      </div>
    </div>
  );
}

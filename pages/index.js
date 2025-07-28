import Link from 'next/link';
import { useContext } from 'react';
import Calendar from '../components/Calendar';
import { CourseContext } from '../context/CourseContext';

export default function Home() {
  const { courses, lessons, setLessons } = useContext(CourseContext);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Courses sidebar (1/6 on desktop) */}
        <aside className="lg:col-span-1 p-4 border-r lg:border-b-0 border-b">
          <h2 className="text-lg font-semibold mb-2">Courses</h2>
          <ul>
            {courses.map(c => (
              <li key={c.id} className="py-1">
                <Link href={`/courses/${c.id}`} className="text-blue-600 hover:underline">
                  {c.title}
                </Link>
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

        {/* Calendar main section (5/6 on desktop) */}
        <main className="lg:col-span-5 p-4">
          <h1 className="text-xl font-semibold mb-4">All Lessons</h1>
          {/* Pass setLessons so drops update global state */}
          <Calendar lessons={lessons} onUpdate={setLessons} />
        </main>
      </div>
    </div>
  );
}

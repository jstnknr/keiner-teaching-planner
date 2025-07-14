import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CourseContext } from '../../context/CourseContext';

export default function NewCoursePage() {
  const { courses, setCourses } = useContext(CourseContext);
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, { id: Date.now().toString(), title }]);
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Course Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
}
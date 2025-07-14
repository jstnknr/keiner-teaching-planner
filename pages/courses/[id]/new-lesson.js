import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CourseContext } from '../../../context/CourseContext';

export default function NewLessonPage() {
  const router = useRouter();
  const { id } = router.query;
  const { lessons, setLessons } = useContext(CourseContext);

  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLesson = {
      id: Date.now().toString(),
      courseId: id,
      title,
      start,
      end
    };
    setLessons([...lessons, newLesson]);
    router.push(`/courses/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">New Lesson</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Lesson Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter lesson title"
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">End Date</label>
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Save Lesson
        </button>
      </form>
    </div>
  );
}

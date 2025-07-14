import { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

export default function CourseForm({ onClose }) {
  const { courses, setCourses } = useContext(CourseContext);
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setCourses([...courses, { id: Date.now().toString(), title }]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h3>New Course</h3>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Course Title" className="border p-1 w-full" />
        <div className="mt-2 flex justify-end">
          <button type="button" onClick={onClose} className="mr-2">Cancel</button>
          <button type="submit" className="bg-blue-500 text-white px-3">Save</button>
        </div>
      </form>
    </div>
  );
}
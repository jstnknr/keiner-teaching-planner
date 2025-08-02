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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-course-heading"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h3 id="new-course-heading" className="text-lg font-semibold">
          New Course
        </h3>

        <div className="mt-2">
          <label htmlFor="course-title-input" className="block mb-1">
            Course Title
          </label>
          <input
            id="course-title-input"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Course Title"
            required
            className="border p-1 w-full rounded"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cancel creating course"
            className="mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            aria-label="Save new course"
            className="bg-blue-500 text-white px-3 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

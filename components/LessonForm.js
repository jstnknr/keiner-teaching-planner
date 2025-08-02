import { useState } from 'react';

export default function LessonForm({ lesson, courseId, lessons, onSave, onClose }) {
  const [title, setTitle] = useState(lesson?.title || '');
  const [start, setStart] = useState(lesson?.start || '');
  const [end, setEnd] = useState(lesson?.end || '');

  const handleSubmit = e => {
    e.preventDefault();
    const updated = lesson
      ? lessons.map(l => (l.id === lesson.id ? { ...l, title, start, end } : l))
      : [...lessons, { id: Date.now().toString(), courseId, title, start, end }];
    onSave(updated);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lesson-form-heading"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h3 id="lesson-form-heading" className="text-lg font-semibold">
          {lesson ? 'Edit Lesson' : 'New Lesson'}
        </h3>

        <div className="mt-2">
          <label htmlFor="lesson-title-input" className="block mb-1">
            Lesson Title
          </label>
          <input
            id="lesson-title-input"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Lesson Title"
            required
            className="border p-1 w-full mb-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="lesson-start-input" className="block mb-1">
            Start Date
          </label>
          <input
            id="lesson-start-input"
            type="date"
            value={start}
            onChange={e => setStart(e.target.value)}
            required
            className="border p-1 w-full mb-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="lesson-end-input" className="block mb-1">
            End Date
          </label>
          <input
            id="lesson-end-input"
            type="date"
            value={end}
            onChange={e => setEnd(e.target.value)}
            required
            className="border p-1 w-full mb-4 rounded"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cancel editing lesson"
            className="mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            aria-label="Save lesson"
            className="bg-green-500 text-white px-3 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

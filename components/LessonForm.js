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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h3>{lesson ? 'Edit' : 'New'} Lesson</h3>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Lesson Title" className="border p-1 w-full mb-2" />
        <label>Start Date:</label>
        <input type="date" value={start} onChange={e => setStart(e.target.value)} className="border p-1 w-full mb-2" />
        <label>End Date:</label>
        <input type="date" value={end} onChange={e => setEnd(e.target.value)} className="border p-1 w-full mb-4" />
        <div className="flex justify-end">
          <button type="button" onClick={onClose} className="mr-2">Cancel</button>
          <button type="submit" className="bg-green-500 text-white px-3">Save</button>
        </div>
      </form>
    </div>
  );
}
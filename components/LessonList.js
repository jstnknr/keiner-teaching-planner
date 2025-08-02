export default function LessonList({ lessons, onEdit, onDelete }) {
  return (
    <ul>
      {lessons.map((l) => (
        <li
          key={l.id}
          className="flex justify-between items-center py-1 hover:bg-gray-100"
        >
          <button
            onClick={() => onEdit(l)}
            onKeyDown={(e) => { if (e.key === 'Enter') onEdit(l); }}
            className="cursor-pointer flex-1 text-left"
            aria-label={`Edit lesson ${l.title}`}
          >
            {l.title}
          </button>
          <button
            onClick={() => {
              if (confirm(`Delete lesson “${l.title}”?`)) {
                onDelete(l.id);
              }
            }}
            aria-label={`Delete lesson ${l.title}`}
            className="text-red-500 hover:text-red-700 ml-2 p-1"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

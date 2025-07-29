export default function LessonList({ lessons, onEdit, onDelete }) {
  return (
    <ul>
      {lessons.map(l => (
        <li
          key={l.id}
          className="flex justify-between items-center py-1 hover:bg-gray-100"
        >
          <span
            onClick={() => onEdit(l)}
            className="cursor-pointer flex-1"
          >
            {l.title}
          </span>
          <button
            onClick={() => {
              if (confirm(`Delete lesson “${l.title}”?`)) {
                onDelete(l.id);
              }
            }}
            className="text-red-500 hover:text-red-700 ml-2 text-sm p-1"
            aria-label={`Delete lesson ${l.title}`}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}

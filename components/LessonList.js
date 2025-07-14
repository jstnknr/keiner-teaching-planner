export default function LessonList({ lessons, onEdit }) {
  return (
    <ul>
      {lessons.map(l => (
        <li key={l.id} onClick={() => onEdit(l)} className="cursor-pointer py-1 hover:bg-gray-100">
          {l.title}
        </li>
      ))}
    </ul>
  );
}
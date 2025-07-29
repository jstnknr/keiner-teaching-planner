// pages/courses/new.jsx
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CourseContext, COURSE_COLORS } from '../../context/CourseContext';

// A parallel array of labels for your colors
const COLOR_OPTIONS = [
  { name: 'Blue',   hex: COURSE_COLORS[0] },
  { name: 'Pink',   hex: COURSE_COLORS[1] },
  { name: 'Green',  hex: COURSE_COLORS[2] },
  { name: 'Orange', hex: COURSE_COLORS[3] },
  { name: 'Teal',   hex: COURSE_COLORS[4] },
  { name: 'Purple', hex: COURSE_COLORS[5] },
];

export default function NewCoursePage() {
  const { courses, setCourses } = useContext(CourseContext);
  const [title, setTitle] = useState('');
  // default to first option’s hex
  const [color, setColor] = useState(COLOR_OPTIONS[0].hex);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([
      ...courses,
      { id: Date.now().toString(), title, color }
    ]);
    router.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Title */}
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

        {/* Color Picker Dropdown */}
        <div>
          <label className="block mb-1">Choose a Color</label>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border p-2 w-full rounded"
          >
            {COLOR_OPTIONS.map(opt => (
              <option key={opt.hex} value={opt.hex}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Save Course
          </button>
        </div>
      </form>
    </div>
  );
}

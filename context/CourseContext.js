// context/CourseContext.js
import { createContext, useState, useEffect } from 'react';

export const CourseContext = createContext();

// 6 preset colors
export const COURSE_COLORS = [
  '#7BABDA', // blue
  '#DA7BBA', // pink
  '#BAE77B', // green
  '#E7BA7B', // orange
  '#7BE7C2', // teal
  '#C27BE7'  // purple
];

const STORAGE_KEY = 'semesterPlannerData';

export const CourseProvider = ({ children }) => {
  // 1) Defaults used for SSR and initial CSR render
  const defaultCourses = [
    { id: 'math101', title: 'Math 101',   color: COURSE_COLORS[0] },
    { id: 'eng202',  title: 'English 202', color: COURSE_COLORS[1] },
  ];
  const defaultLessons = [
    { id: '1' , courseId: 'math101', title: 'Intro to Algebra',  start: '2025-07-15', end: '2025-07-15' },
    { id: '2' , courseId: 'eng202',  title: 'Grammar Basics',    start: '2025-07-18', end: '2025-07-18' },
  ];

  const [courses, setCourses] = useState(defaultCourses);
  const [lessons, setLessons] = useState(defaultLessons);

  // 2) On client only, load saved data and overwrite state
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const { courses: savedCourses, lessons: savedLessons } = JSON.parse(stored);
        if (Array.isArray(savedCourses)) setCourses(savedCourses);
        if (Array.isArray(savedLessons)) setLessons(savedLessons);
      }
    } catch (e) {
      console.warn('Could not load saved planner data:', e);
    }
  }, []);

  // 3) Persist any changes back to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ courses, lessons }));
  }, [courses, lessons]);

  return (
    <CourseContext.Provider value={{ courses, setCourses, lessons, setLessons }}>
      {children}
    </CourseContext.Provider>
  );
};

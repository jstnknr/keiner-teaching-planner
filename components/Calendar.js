// components/Calendar.js
import { useState, useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CourseContext } from '../context/CourseContext';

export default function Calendar({ lessons, onUpdate }) {
  const { courses } = useContext(CourseContext);

  // Build an events array that injects the course color
  const eventsWithColor = lessons.map(lesson => {
    // Find the matching course
    const course = courses.find(c => c.id === lesson.courseId);
    return {
      ...lesson,
      // FullCalendar will use `color` as background+border
      color: course?.color || '#3788d8'
    };
  });

  // Dynamic aspectRatio logic as before...
  const [aspectRatio, setAspectRatio] = useState(1.35);
  useEffect(() => {
    function updateAspect() {
      setAspectRatio(window.innerWidth < 640 ? 0.75 : 1.35);
    }
    updateAspect();
    window.addEventListener('resize', updateAspect);
    return () => window.removeEventListener('resize', updateAspect);
  }, []);

  // Handle drag‑and‑drop (retain your onUpdate callback)
  const handleEventDrop = info => {
    const updated = lessons.map(evt =>
      evt.id === info.event.id
        ? { ...evt, start: info.event.startStr, end: info.event.endStr }
        : evt
    );
    onUpdate(updated);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      editable
      events={eventsWithColor}
      eventDrop={handleEventDrop}
      height="auto"
      aspectRatio={aspectRatio}
    />
  );
}

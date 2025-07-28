import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function Calendar({ lessons, onUpdate }) {
  const [aspectRatio, setAspectRatio] = useState(1.35);

  useEffect(() => {
    function updateAspect() {
      setAspectRatio(window.innerWidth < 640 ? 0.75 : 1.35);
    }
    updateAspect();
    window.addEventListener('resize', updateAspect);
    return () => window.removeEventListener('resize', updateAspect);
  }, []);

  const handleEventDrop = (info) => {
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
      events={lessons}
      eventDrop={handleEventDrop}
      height="auto"
      aspectRatio={aspectRatio}
    />
  );
}

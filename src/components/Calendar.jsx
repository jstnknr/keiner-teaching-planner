import React, { useState, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CourseContext } from '../context/CourseContext';

export default function Calendar() {
  const { lessons } = useContext(CourseContext);
  const [events, setEvents] = useState(
    lessons.map(lesson => ({
      id: lesson.id,
      title: lesson.title,
      start: lesson.startDate,
      end: lesson.endDate,
    }))
  );

  function handleDateSelect(selectInfo) {
  }

  function handleEventDrop(dropInfo) {
    const updated = events.map(evt =>
      evt.id === dropInfo.event.id
        ? { ...evt, start: dropInfo.event.start, end: dropInfo.event.end }
        : evt
    );
    setEvents(updated);
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      editable={true}
      events={events}
      select={handleDateSelect}
      eventDrop={handleEventDrop}
    />
  );
}
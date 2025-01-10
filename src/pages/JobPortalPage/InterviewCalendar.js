import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoIosTrash } from "react-icons/io";

import "./InterviewCalendarStyle.css";
import CancelModal from "./CancelModal";

const DAYS = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const InterviewCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState({
    "2025-01-10": [
      {
        time: "12:30",
        title: "Frontend Developer Interview",
        link: "meet.google.com/abc-123",
      },
    ],
    "2025-01-15": [
      {
        time: "09:00",
        title: "Team Weekly Meeting",
        link: "zoom.us/j/123456",
      },
      {
        time: "15:00",
        title: "FullStack Developer Interview",
        link: "zoom.us/j/adfdf",
      },
    ],
    "2025-01-20": [
      {
        time: "19:30",
        title: "Frontend Developer Interview",
        link: "meet.google.com/abc-456",
      },
    ],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  // Helper functions remain the same
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
      days.push({
        date: new Date(year, month - 1, daysInMonth - i),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        currentMonth: true,
      });
    }

    return days;
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const hasEvents = (date) => {
    return events[formatDate(date)] !== undefined;
  };

  const changeMonth = (increment) => {
    const newMonth = new Date(
      currentMonth.setMonth(currentMonth.getMonth() + increment)
    );
    setCurrentMonth(new Date(newMonth));
  };

  const handleDeleteEvent = (event) => {
    setEventToDelete(event);
    setModalOpen(true);
  };

  const handleConfirmDelete = (reason) => {
    const dateKey = formatDate(selectedDate);
    const updatedEvents = { ...events };

    const dateEvents = updatedEvents[dateKey];

    const remainingEvents = dateEvents.filter(
      (event) =>
        !(
          event.time === eventToDelete.time &&
          event.title === eventToDelete.title &&
          event.link === eventToDelete.link
        )
    );

    if (remainingEvents.length === 0) {
      delete updatedEvents[dateKey];
    } else {
      updatedEvents[dateKey] = remainingEvents;
    }

    setEvents(updatedEvents);
    setModalOpen(false);
    setEventToDelete(null);
    console.log("Deleted event with reason:", reason);
  };

  return (
    <div className="calendar-wrapper">
      {/* Calendar Section */}
      <div className="calendar-section">
        <p className="calendar-header">
          Chọn ngày trong lịch để xem lịch phỏng vấn của ngày hôm đó
        </p>

        <div className="month-navigator">
          <button className="nav-button" onClick={() => changeMonth(-1)}>
            <FaChevronLeft />
          </button>
          <span className="month-title">
            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <button className="nav-button" onClick={() => changeMonth(1)}>
            <FaChevronRight />
          </button>
        </div>

        <div className="calendar-grid">
          {DAYS.map((day) => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}

          {getDaysInMonth(currentMonth).map((item, index) => {
            const isSelected =
              selectedDate &&
              item.date.getDate() === selectedDate.getDate() &&
              item.date.getMonth() === selectedDate.getMonth();

            const classes = [
              "calendar-day",
              !item.currentMonth && "inactive",
              isSelected && "selected",
              hasEvents(item.date) && "has-events",
              isToday(item.date) && "today",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={index}
                className={classes}
                onClick={() => setSelectedDate(item.date)}
              >
                {item.date.getDate()}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h2 className="events-title">Các buổi phỏng vấn trong ngày</h2>

        {events[formatDate(selectedDate)]?.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-time">{event.time}</div>
            <div
              className="event-info"
              style={{ flex: 1, marginLeft: "10px", marginRight: "10px" }}
            >
              <div className="event-title">{event.title}</div>
              <a
                href={`https://${event.link}`}
                className="event-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.link}
              </a>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteEvent(event)}
            >
              <IoIosTrash size={20} />
            </button>
          </div>
        ))}
      </div>

      <CancelModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default InterviewCalendar;

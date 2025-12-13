import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = ({ events = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getEventsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 h-24" />);
    }

    // Actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dayEvents = getEventsForDate(day);
      const today = isToday(day);

      days.push(
        <div
          key={day}
          className={`p-2 h-24 border border-gray-200 transition-colors hover:bg-gray-50 ${
            today ? 'bg-blue-50' : ''
          }`}
        >
          <div
            className={`text-sm font-semibold mb-1 ${
              today ? 'text-blue-600' : 'text-gray-900'
            }`}
          >
            {day}
          </div>
          <div className="space-y-1 overflow-y-auto max-h-16">
            {dayEvents.map((event, idx) => (
              <div
                key={idx}
                className={`text-xs p-1 rounded truncate ${
                  event.color || 'bg-blue-100 text-blue-800'
                }`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-0 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0 border-t border-l border-gray-200">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;

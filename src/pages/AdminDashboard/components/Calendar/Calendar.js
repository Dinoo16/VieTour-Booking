import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // For demo: set to June 2025
  // const currentMonth = 5; // June (0-indexed)
  // const currentYear = 2025;

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate days for calendar grid
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(d);
  }

  return (
    <div className={cx('calendar-container')}>
      <div className={cx('calendar-header')}>
        <span>
          {new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <div>
          <button className={cx('nav-btn')} onClick={handlePrevMonth}>&lt;</button>
          <button className={cx('nav-btn')} onClick={handleNextMonth}>&gt;</button>
        </div>
      </div>
      <div className={cx('calendar-grid')}>
        {WEEK_DAYS.map((day) => (
          <div key={day} className={cx('calendar-weekday')}>{day}</div>
        ))}
        {days.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={cx('calendar-day', { selected: day === selectedDay })}
            >
              {day}
            </div>
          ) : (
            <div key={idx} className={cx('calendar-day', 'empty')}></div>
          )
        )}
      </div>
    </div>
  );
}

export default Calendar;
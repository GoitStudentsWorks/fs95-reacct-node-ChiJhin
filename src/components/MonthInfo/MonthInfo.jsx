import { useState } from 'react';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import Calendar from '../Calendar/Calendar';
import css from './MonthInfo.module.css';

export default function MonthInfo() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>Month</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </>
  );
}

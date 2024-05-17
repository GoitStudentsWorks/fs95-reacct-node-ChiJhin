import { useState } from 'react';
import CalendarPagination from '../CalendarPagination/CalendarPagination';
import Calendar from '../Calendar/Calendar';
import css from './MonthInfo.module.css';
import { useSelector } from 'react-redux';
import { selectMonth } from '../../redux/water/selectors';
import { MonthToStr } from '../../utils/dates';

export default function MonthInfo() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const month = useSelector(selectMonth);

  return (
    <>
      <div className={css.wrapper}>
        <h3 className={css.month}>{MonthToStr(month)}</h3>
        <CalendarPagination
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Calendar selectedDate={selectedDate} />
    </>
  );
}

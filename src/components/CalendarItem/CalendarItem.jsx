import css from './CalendarItem.module.css';

export default function CalendarItem({ day }) {
  return (
    <>
      <button className={css.dayBtn}>{day}</button>
    </>
  );
}

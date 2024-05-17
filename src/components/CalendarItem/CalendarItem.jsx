import css from './CalendarItem.module.css';

export default function CalendarItem({ day, profit = 0 }) {
  return (
    <>
      <button className={css.dayBtn}>{day}</button>
      <span className={css.profit}>{profit} %</span>
    </>
  );
}

import { useSelector } from 'react-redux';
import css from './CalendarItem.module.css';
import { selectMonthWater } from '../../redux/water/selectors';
import { selectUser } from '../../redux/auth/selectors';

export default function CalendarItem({ day, profit = 0 }) {
  const monthWater = useSelector(selectMonthWater);

  const dayNorma = useSelector(selectUser).dailyWaterNorm;

  profit = 0;

  if (monthWater[day]) {
    if (dayNorma) {
      profit = (monthWater[day] * 100) / (dayNorma * 1000);
    } else {
      profit = 100;
    }
  }

  return (
    <>
      <button className={css.dayBtn}>{day}</button>
      <span className={css.profit}>{profit.toFixed(0)} %</span>
    </>
  );
}

import css from './WaterProgressBar.module.css';
import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectWaterLoading } from '../../redux/water/selectors';
// import { selectDayWater } from '../../redux/water/selectors';
// import { selectDay } from '../../redux/water/selectors';

export default function WaterProgressBar() {
  // const waterAmount = useSelector(selectDayWater);
  const waterAmount = 50;
  // const selectedDay = useSelector(selectDay);
  const selectedDay = 'Wednesday';
  const isLoading = useSelector(selectWaterLoading);

  return (
    <div className={css.progressBarContainer}>
      <div className={css.selectedDay}>
        {!isLoading ? (
          <div className={css.nameBar}> {selectedDay}</div>
        ) : (
          <div className={css.nameBar}>Today</div>
        )}
      </div>
      <div className={css.progressBar}>
        <div className={css.progress} style={{ width: `${waterAmount}%` }}>
          <svg
            className={css.circle}
            style={{ left: `${waterAmount}% ` }}
            fill="var(--accent)"
          >
            <use href={`${sprite}#icon-Ellipse-2`}></use>
          </svg>
        </div>
      </div>
      <div className={css.staticBar}>
        <span className={css.staticNumber}>0%</span>
        <span className={css.staticNumber}>50%</span>
        <span className={css.staticNumber}>100%</span>
      </div>
    </div>
  );
}

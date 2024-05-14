import { useState, useEffect } from 'react';
import css from './WaterProgressBar.module.css';
import sprite from '../../assets/sprite.svg';

export default function WaterProgressBar() {
  const [waterAmount, setWaterAmount] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Math.floor(Math.random() * 101);
      const newWaterAmount = 50;
      const newTodayAmount = 'Wednesday';
      setWaterAmount(newWaterAmount);
      setSelectedDay(newTodayAmount);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const isLoading = false;

  return (
    <div className={css.progressBarContainer}>
      <div className={css.selectedDay}>
        {!isLoading ? (
          <div className={css.nameBar}> Today</div>
        ) : (
          <div className={css.nameBar}> {selectedDay}</div>
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

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import svg from '../../assets/sprite.svg';
import css from './CalendarPagination.module.css';

export default function CalendarPagination({ selectedDate, setSelectedDate }) {
  const goToPrevoiusMonth = () => {
    const prevoiusMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevoiusMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const formattedDate = selectedDate
    .toLocaleString('en-GB', {
      month: 'long',
      year: 'numeric',
    })
    .replace(/(\w+) (\d+)/, '$1, $2');

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <button onClick={goToPrevoiusMonth} className={css.btn}>
          <BsChevronLeft size="12" className={css.arrow} />
        </button>
        <span className={css.span}>{formattedDate}</span>
        <button onClick={goToNextMonth} className={css.btn}>
          <BsChevronRight size="12" className={css.arrow} />
        </button>
      </div>
      <button>
        <svg width="20" height="20" className={css.pieIcon}>
          <use xlinkHref={`${svg}#icon-pie-chart`}></use>
        </svg>
      </button>
    </div>
  );
}

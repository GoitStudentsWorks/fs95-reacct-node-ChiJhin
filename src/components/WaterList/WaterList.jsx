import WaterItem from '../WaterItem/WaterItem';
import data from './dataTest';
import css from './WaterList.module.css';

export default function WaterList() {
  return (
    <>
      <ul className={css.waterListWrap}>
        {data.map((item) => (
          <WaterItem
            key={item.id}
            countMl={item.amount}
            currentTime={item.time}
          />
        ))}
      </ul>
    </>
  );
}

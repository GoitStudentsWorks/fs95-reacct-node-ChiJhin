import DailyInfo from '../DailyInfo/DailyInfo';
import MonthInfo from '../MonthInfo/MonthInfo';
import UserPanel from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';

export default function WaterDetailedInfo() {
  return (
    <div className={css.container}>
      <UserPanel userName={'Dima'} />
      <div>
        <DailyInfo />
        <MonthInfo />
      </div>
    </div>
  );
}

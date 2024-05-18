import AddWaterBtnSmall from '../AddWaterBtnSmall/AddWaterBtnSmall';
import ChooseDate from '../ChooseDate/ChooseDate';
import WaterList from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

export default function DailyInfo() {
  return (
    <>
      <div>
        <div className={css.waterListBlockHead}>
          <ChooseDate />
          <AddWaterBtnSmall />
        </div>
        <WaterList />
      </div>
    </>
  );
}

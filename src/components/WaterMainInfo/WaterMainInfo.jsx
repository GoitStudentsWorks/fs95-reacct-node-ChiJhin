import AddWaterBtnBig from '../AddWaterBtnBig/AddWaterBtnBig';
import Logo from '../Logo/Logo';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';

export default function WaterMainInfo() {
  return (
    <div className={css.wrapper}>
      <Logo />
      <div>
        <WaterDailyNorma />
        <WaterProgressBar />
        <AddWaterBtnBig />
      </div>
    </div>
  );
}

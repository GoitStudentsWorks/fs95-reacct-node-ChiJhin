import AddWaterBtnBig from '../AddWaterBtnBig/AddWaterBtnBig';
import Logo from '../Logo/Logo';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottleDesc from '../../assets/desktop/bottle.png';
import bottleDescX2 from '../../assets/desktop/bottle_2x.png';
import bottleMob from '../../assets/mobile/bottle.png';
import bottleMobX2 from '../../assets/mobile/bottle_2x.png';

export default function WaterMainInfo() {
  return (
    <>
      <div className={css.bottle_page_wrapper}>
        <picture className={css.bottle_page_img}>
          {/*dekstop*/}
          <source
            media="(min-width: 1280px)"
            srcSet={`${bottleDesc}, ${bottleDescX2} 2x`}
            type="image/png"
          />

          {/*mobile*/}
          <source
            media="(min-width: 320px)"
            srcSet={`${bottleMob}, ${bottleMobX2} 2x`}
            type="image/png"
          />
          {/*default*/}
          <img
            className="bottle_page_img"
            src={bottleDesc}
            alt="bottle with water"
          />
        </picture>
        <div>
          <Logo />
          <div className={css.bottle_page_norm_wrapper}>
            <WaterDailyNorma />
            <WaterProgressBar />
            <AddWaterBtnBig />
          </div>
        </div>
      </div>
    </>
  );
}

import AddWaterBtnBig from '../AddWaterBtnBig/AddWaterBtnBig';
import Logo from '../Logo/Logo';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import bottleDesc from '../../assets/desktop/bottle.png';
import bottleDescX2 from '../../assets/desktop/bottle_2x.png';
import bottleTab from '../../assets/tablet/bottle.png';
import bottleTabX2 from '../../assets/tablet/bottle_2x.png';
import bottleMob from '../../assets/mobile/bottle.png';
import bottleMobX2 from '../../assets/mobile/bottle_2x.png';

export default function WaterMainInfo() {
  return (
    <>
      <div className={css.bottle_page_wrapper}>
        <picture className={css.bottle_page_img}>
          {/*dekstop*/}
          <source
            media="(min-width: 1440px)"
            srcSet={`${bottleDesc}, ${bottleDescX2} 2x`}
            type="image/png"
          />
          {/*tablet*/}
          <source
            media="(min-width: 768px)"
            srcSet={`${bottleTab}, ${bottleTabX2} 2x`}
            type="image/png"
          />
          {/*mobile*/}
          <source
            media="(min-width: 375px)"
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
            <div className={css.progressBarCenter}>
              <WaterProgressBar />
            </div>
            <div className={css.progressBarRight}>
              <AddWaterBtnBig />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

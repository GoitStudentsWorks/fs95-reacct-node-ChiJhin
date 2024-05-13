import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import css from './TrackerPage.module.css';

export default function TrackerPage() {
  return (
    <>
      <main>
        <div className={css.wrapper}>
          <WaterMainInfo />
          <WaterDetailedInfo />
        </div>
      </main>
    </>
  );
}

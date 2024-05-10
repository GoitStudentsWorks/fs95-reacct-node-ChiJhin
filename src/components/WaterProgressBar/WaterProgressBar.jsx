import css from './WaterProgressBar.module.css';
export default function WaterProgressBar() {
  return (
    <>
      <div>
        <p>Today</p>
        <div>progress</div>
        <div className={css.progress}>
          <p>0%</p>
          <p>50%</p>
          <p>100%</p>
        </div>
      </div>
    </>
  );
}

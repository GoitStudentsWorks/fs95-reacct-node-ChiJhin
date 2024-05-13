import css from './WaterModal.module.css';
import WaterForm from '../WaterForm/WaterForm';

export default function WaterModal() {
  const handleDecrement = () => {};
  const handleIncrement = () => {};

  return (
    <>
      <h1 className={css.titleAdd}>Add water</h1>
      <h2 className={css.titleAmount}>Amount of water:</h2>

      <div className={css.amauntBox}>
        <button className={css.btnMinus} onClick={handleDecrement}>
          -
        </button>
        <div className={css.amauntWraper}>
          <p className={css.wraperText}>50 ml</p>
        </div>
        <button className={css.btnMinus} onClick={handleIncrement}>
          +
        </button>
      </div>
      <WaterForm />
    </>
  );
}

import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnSmall.module.css';

export default function AddWaterBtnSmall() {
  return (
    <>
      <button className={css.wrap}>
        <span className={css.iconWrap}>
          <FaPlus />
        </span>
        Add water
      </button>
    </>
  );
}

import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnBig.module.css';

export default function AddWaterBtnBig() {
  return (
    <>
      <button className={css.container}>
        <FaPlus />
        Add water
      </button>
    </>
  );
}

import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnBig.module.css';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/water/operations';

export default function AddWaterBtnBig() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addWater(250));
  }
  return (
    <>
      <button className={css.container} onClick={handleClick}>
        <FaPlus />
        Add water
      </button>
    </>
  );
}

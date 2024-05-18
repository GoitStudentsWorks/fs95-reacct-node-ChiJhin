import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnSmall.module.css';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/water/operations';

export default function AddWaterBtnSmall() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addWater(250));
  }
  return (
    <>
      <button className={css.wrap} onClick={handleClick}>
        <span className={css.iconWrap}>
          <FaPlus />
        </span>
        Add water
      </button>
    </>
  );
}

import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnSmall.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWater, chooseMonth } from '../../redux/water/operations';
import { selectDay, selectMonth } from '../../redux/water/selectors';
import { TimeToString } from '../../utils/dates';

export default function AddWaterBtnSmall() {
  const dispatch = useDispatch();
  const date = useSelector(selectDay);
  const month = useSelector(selectMonth);
  function handleClick() {
    const now = new Date();

    const time = TimeToString(now);
    dispatch(addWater({ value: 250, date, time }));
    setTimeout(() => {
      dispatch(chooseMonth(month));
    }, 200);
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

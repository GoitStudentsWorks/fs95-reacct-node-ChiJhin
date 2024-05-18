import { FaPlus } from 'react-icons/fa';
import css from './AddWaterBtnBig.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWater, chooseMonth } from '../../redux/water/operations';
import { selectDay, selectMonth } from '../../redux/water/selectors';
import { TimeToString } from '../../utils/dates';

export default function AddWaterBtnBig() {
  const month = useSelector(selectMonth);
  const date = useSelector(selectDay);

  const dispatch = useDispatch();
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
      <button className={css.container} onClick={handleClick}>
        <FaPlus />
        Add water
      </button>
    </>
  );
}

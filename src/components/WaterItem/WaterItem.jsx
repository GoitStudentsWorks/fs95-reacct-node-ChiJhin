import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import css from './WaterItem.module.css';
import svg from '../../assets/sprite.svg';

export default function WaterItem({
  myKey: id,
  countMl: ml,
  currentTime: time,
  delHendler: delModalHendler,
  editHendler: editModalHendler,
}) {
  function hendleClic() {
    delModalHendler(id);
  }
  return (
    <>
      <li className={css.card}>
        <svg className={css.glassIcon} width="38" height="38">
          <use xlinkHref={`${svg}#icon-glass`}></use>
        </svg>
        <div className={css.cardInfo}>
          <span className={css.amountWater}>{ml} ml</span>
          <span className={css.time}>{time}</span>
        </div>

        <div className={css.cardBtnsBlock}>
          <button className={css.btn} onClick={editModalHendler}>
            <FiEdit2 />
          </button>
          <button className={css.btn} onClick={hendleClic}>
            <AiOutlineDelete />
          </button>
        </div>
      </li>
    </>
  );
}

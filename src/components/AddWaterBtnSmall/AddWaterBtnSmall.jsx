import { useState } from 'react';
import Modals from '../Modals/Modal/Modal';
import { FaPlus } from 'react-icons/fa';
import WaterModal from '../Modals/WaterModal/WaterModal';
import css from './AddWaterBtnSmall.module.css';


export default function AddWaterBtnSmall() {
  const [update, setUpdate] = useState(null);
  const [modIsOpen, setModIsOpen] = useState(false);
  const styleNameClass = {
    modalWater: 'Modal',
    btnWater: 'btnWater',
    wrap: 'wrap',
  };

  function handleClick() {
  setUpdate(null);
  setModIsOpen(true);
  }
  
  function closeModalUpdate() {
    setModIsOpen(false);
  }

  return (
    <div>
      <button type="button" className={css.wrap} onClick={handleClick}>
        <span className={css.iconWrap}>
          <FaPlus />
        </span>
        Add water
      </button>
      {modIsOpen && (
        <Modals
          styleVariantBtn={styleNameClass.btnWater}
          styleVariant={styleNameClass.modalWater}
          isOpen={modIsOpen}
          closeModal={closeModalUpdate}
        >
          <div>
            <WaterModal closeModal={closeModalUpdate}  entryId={update}  />
          </div>
        </Modals>
      )}
    </div>
  );
}
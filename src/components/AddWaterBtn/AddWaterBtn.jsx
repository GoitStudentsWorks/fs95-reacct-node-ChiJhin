import { useState } from 'react';
import Modals from '../Modals/Modal/Modal';
import { FiEdit2 } from 'react-icons/fi';
import WaterModal from '../Modals/WaterModal/WaterModal';

export default function AddWaterBtn({ id }) {
  const [update, setUpdate] = useState(null);
  const [modIsOpen, setModIsOpen] = useState(false);
  const styleNameClass = {
    modalDelete: 'modalDelete',
    btnDelete: 'btnDelete',
    modalSetting: 'modalSetting',
    btnSetting: 'btnSetting',
    modalWater: 'Modal',
    btnWater: 'btnWater',
  };

  const handleBtn = (id) => {
    setUpdate(id);
    setModIsOpen(true);
  };

  const closeModalUpdate = () => {
    setModIsOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={() => handleBtn(id)}>
        <FiEdit2 />
      </button>
      {update !== null && (
        <Modals
          styleVariantBtn={styleNameClass.btnWater}
          styleVariant={styleNameClass.modalWater}
          isOpen={modIsOpen}
          closeModal={closeModalUpdate}
        >
          <div>
            <WaterModal closeModal={closeModalUpdate} entryId={update} />
          </div>
        </Modals>
      )}
    </div>
  );
}

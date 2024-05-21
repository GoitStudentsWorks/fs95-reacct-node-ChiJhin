import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import Modals from '../Modals/Modal/Modal';
import UserSettingsModal from '../Modals/UserSettingsModal/UserSettingsModal';
import css from './AddSettingBtn.module.css';

export default function AddSettingBtn() {
  const [modIsOpen, setModIsOpen] = useState(false);
  const styleNameClass = {
    modalDelete: 'modalDelete',
    btnDelete: 'btnDelete',
    modalSetting: 'modalSetting',
    btnSetting: 'btnSetting',
    modalWater: 'Modal',
    btnWater: 'btnWater',
  };

  const handleAddWater = () => {
    setModIsOpen(true);
  };

  const closeModalUpdate = () => {
    setModIsOpen(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => handleAddWater()}
        className={css.btn}
      >
        {' '}
        <CiSettings />
        Setting
      </button>
      <Modals
        styleVariantBtn={styleNameClass.btnSetting}
        styleVariant={styleNameClass.modalSetting}
        isOpen={modIsOpen}
        closeModal={closeModalUpdate}
      >
        <div>
          <UserSettingsModal closeModal={closeModalUpdate} modIsOpen={modIsOpen}/>
        </div>
      </Modals>
    </div>
  );
}

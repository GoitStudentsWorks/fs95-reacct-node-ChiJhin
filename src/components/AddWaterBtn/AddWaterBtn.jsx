// import AddWaterForm from "components/AddWaterForm/AddWaterForm";

import { useState } from 'react';
import Modals from "../Modals/Modal/Modal";
// import WaterForm from '../Modals/WaterForm/WaterForm';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
export default function BtnAddWater (){
//     const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();
//   const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [update, setUpdate] = useState(null);
  const [modIsOpen, setModIsOpen] = useState(false);
  const styleNameClass = "modalDelete"

      const handleAddWater= (id) => {
        setUpdate(1)
          setModIsOpen(true);
          setSelectedContactId(id);
        };

        const closeModalUpdate = () => {
            setModIsOpen(false);
          };
    return (
        <div>
            <button
                  type="button"
                  onClick={() => handleAddWater(1)}
                >
                  AddWater
                </button>
        {update !== null && (
            <Modals styleVariant={styleNameClass} isOpen={modIsOpen} closeModal={closeModalUpdate}>
          <div>
            {/* тут втавляєм потрібний компонент */}
            <LogOutModal/>
            {/* <WaterForm item={update} closeModal={closeModalUpdate} /> */}
          </div>
        </Modals>
       )} 
      </div>
    )
}
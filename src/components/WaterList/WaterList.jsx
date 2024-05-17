import WaterItem from '../WaterItem/WaterItem';
import data from './dataTest';
import css from './WaterList.module.css';
import DeleteWaterModal from '../Modals/DeleteWaterModal/DeleteWaterModal';
import { useState } from 'react';

export default function WaterList() {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const delModalHendler = () => setOpenDelModal(!openDelModal);
  const editModalHendler = () => setOpenEditModal(!openEditModal);
  return (
    <>
      <ul className={css.waterListWrap}>
        {data.map((item) => (
          <WaterItem
            key={item.id}
            countMl={item.amount}
            currentTime={item.time}
            modal={openDelModal}
            setModal={setOpenDelModal}
            delHendler={delModalHendler}
            editHendler={editModalHendler}
          />
        ))}
      </ul>
      {openDelModal && (
        <DeleteWaterModal isOpen={openDelModal} closeModal={delModalHendler} />
      )}
    </>
  );
}

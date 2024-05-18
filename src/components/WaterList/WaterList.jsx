import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import DeleteWaterModal from '../Modals/DeleteWaterModal/DeleteWaterModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDayWater } from '../../redux/water/selectors';

export default function WaterList() {
  const [openDelModal, setOpenDelModal] = useState(false);
  const [idTodel, setidTodel] = useState('');
  const [openEditModal, setOpenEditModal] = useState(false);
  // const delModalHendler = () => setOpenDelModal(!openDelModal);
  function delModalHendler(id) {
    setOpenDelModal(!openDelModal);
    setidTodel(id);
  }
  const editModalHendler = () => setOpenEditModal(!openEditModal);

  const dayWater = useSelector(selectDayWater);

  return (
    <>
      <ul className={css.waterListWrap}>
        {dayWater.map((item) => (
          <WaterItem
            key={item._id}
            myKey={item._id}
            countMl={item.value}
            currentTime={item.time}
            modal={openDelModal}
            setModal={setOpenDelModal}
            delHendler={delModalHendler}
            editHendler={editModalHendler}
          />
        ))}
      </ul>
      {openDelModal && (
        <DeleteWaterModal closeModal={delModalHendler} entryId={idTodel} />
      )}
    </>
  );
}

import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { LuGlassWater } from 'react-icons/lu';

export default function WaterItem({ countMl: ml, currentTime: time }) {
  return (
    <>
      <div>
        <LuGlassWater />
        <p>{ml} ml</p>
        <p>{time}</p>
        <FiEdit2 />
        <AiOutlineDelete />
      </div>
    </>
  );
}

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function UserBar({ userName: name }) {
  return (
    <>
      <button>
        {name} <img src="" alt="User" />
        <IoIosArrowDown />
      </button>
    </>
  );
}

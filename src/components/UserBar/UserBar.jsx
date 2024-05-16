import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import css from './UserBar.module.css';

export default function UserBar({
  userName: name,
  state: openBar,
  setState: setOpenBar,
}) {
  const handleClick = () => setOpenBar(!openBar);
  return (
    <>
      <button onClick={handleClick} className={css.container}>
        {name} <img src="" alt="User" className={css.img} />
        {openBar === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </>
  );
}

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import css from './UserBar.module.css';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export default function UserBar({ state: openBar, setState: setOpenBar }) {
  const handleClick = () => setOpenBar(!openBar);
  const user = useSelector(selectUser);
  return (
    <>
      <button onClick={handleClick} className={css.container}>
        {user.name}{' '}
        <img
          src={user.avatarURL ? user.avatarURL : '/default-avatar.jpg'}
          alt="User"
          className={css.img}
        />
        {openBar === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </>
  );
}

import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import css from './UserBar.module.css';
import { useSelector } from 'react-redux';
import { selectAvatar, selectUser } from '../../redux/auth/selectors';

export default function UserBar({ state: openBar, setState: setOpenBar }) {
  const handleClick = () => setOpenBar(!openBar);
  const user = useSelector(selectUser);
  const userAvatar = useSelector(selectAvatar);
  return (
    <>
      <button onClick={handleClick} className={css.container}>
        {user.name.length > 8 ? user.name.slice(0, 5) : user.name}{' '}
        <img
          src={userAvatar ? userAvatar : './default-avatar.jpg'}
          alt="User"
          className={css.img}
        />
        {openBar === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </>
  );
}

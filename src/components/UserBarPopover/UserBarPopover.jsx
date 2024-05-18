import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import AddSettingBtn from '../AddSettingBtn/AddSettingBtn';

export default function UserBarPopover() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={css.container}>
        <button className={css.btn}>
          <CiSettings /> Settings
           <AddSettingBtn/>
        </button>
        <button className={css.btn} onClick={logOut}>
          <FiLogOut /> Log out
        </button>
      </div>
    </>
  );
}

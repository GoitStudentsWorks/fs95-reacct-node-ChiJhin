import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';

export default function UserBarPopover() {
  return (
    <>
      <div className={css.container}>
        <button className={css.btn}>
          <CiSettings /> Settings
        </button>
        <button className={css.btn}>
          <FiLogOut /> Log out
        </button>
      </div>
    </>
  );
}

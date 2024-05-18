import { CiSettings } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { logoutWater } from '../../redux/water/slice';
import { useState } from 'react';
import AddSettingBtn from '../AddSettingBtn/AddSettingBtn';

export default function UserBarPopover() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());

    dispatch(logoutWater());
  };

  return (
    <>
      <div className={css.container}>
        <span className={css.btn}>
          <AddSettingBtn />
        </span>

        <button className={css.btn} onClick={logOut}>
          <FiLogOut /> Log out
        </button>
      </div>
    </>
  );
}

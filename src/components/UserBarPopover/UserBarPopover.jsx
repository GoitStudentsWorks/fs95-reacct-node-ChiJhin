// import { CiSettings } from 'react-icons/ci';
// import { FiLogOut } from 'react-icons/fi';
import css from './UserBarPopover.module.css';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/auth/operations';
// import { logoutWater } from '../../redux/water/slice';
// import { useState } from 'react';
import AddSettingBtn from '../AddSettingBtn/AddSettingBtn';
import AddLogOutBtn from '../AddLogOutBtn/AddLogOutBtn';

export default function UserBarPopover() {
  // const dispatch = useDispatch();

  // const logOut = () => {
  //   dispatch(logout());

  //   dispatch(logoutWater());
  // };

  return (
    <>
      <div className={css.container}>
        <AddSettingBtn />

        <AddLogOutBtn />
      </div>
    </>
  );
}

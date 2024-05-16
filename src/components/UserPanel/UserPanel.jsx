import { useState } from 'react';
import UserBar from '../UserBar/UserBar';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './UserPanel.module.css';

export default function UserPanel({ userName: name }) {
  const [openBar, setOpenBar] = useState(false);
  return (
    <div className={css.wrapper}>
      <h2>Hello, {name}!</h2>
      <div className={css.panelWrap}>
        <UserBar userName={name} state={openBar} setState={setOpenBar} />
        {openBar && <UserBarPopover />}
      </div>
    </div>
  );
}

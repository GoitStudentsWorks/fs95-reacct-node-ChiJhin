import { useState } from 'react';
import css from './UserSettingsModal.module.css';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';

export default function UserSettingsModal() {
  
  return (
    <>
      <h2 className={css.title}> Setting</h2>
        
      <div className={css.settingBox}>
        
          <UserSettingsForm/>
      </div>
    </>
  );
}
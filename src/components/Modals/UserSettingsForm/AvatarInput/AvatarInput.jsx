import { Controller } from 'react-hook-form';
import css from './AvatarInput.module.css';
import sprite from '../../../../assets/sprite.svg';
import { useState } from 'react';

export default function AvatarInput({ control, register, avatar, setAvatar }) {
  // const [avatar, setAvatar] = useState(true);
  // const [avatar, setAvatar] = useState(false)

  const avatarUser = (
    <img
      className={css.photo}
      src={avatar}
      width="100%"
      height="100%"
      alt="Avatar"
    />
  );
  const avatarDefault = (
    <svg
      fill="var(--main)"
      // width="62"
      // height="62"
      className={css.svgAvatar}
    >
      <use href={`${sprite}#icon-trash`}></use>
    </svg>
  );

  const onChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(event.target.files[0]);
    }
  };

  return (
    <div className={css.avatarInput}>
      <div className={css.avatarBox}>{avatar ? avatarUser : avatarDefault}</div>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          // console.log(field)
          <input
            {...field}
            {...register('avatar')}
            type="file"
            id="file-input"
            // name="file"
            style={{ display: 'none' }}
            onChange={onChange}
          />
        )}
      />
      <label htmlFor="file-input">
        <div className={css.upLoad}>
          <svg
            fill="var(--main)"
            // width="20"
            // height="20"
            className={css.svgAvatarBtn}
          >
            <use href={`${sprite}#icon-upload`}></use>
          </svg>
          <p>Upload a photo</p>
        </div>
      </label>
    </div>
  );
}

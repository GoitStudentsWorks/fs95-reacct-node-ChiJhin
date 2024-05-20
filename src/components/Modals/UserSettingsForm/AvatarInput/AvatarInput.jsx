import { Controller } from 'react-hook-form';
import css from './AvatarInput.module.css';
import sprite from '../../../../assets/sprite.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAvatar } from '../../../../redux/auth/selectors';

export default function AvatarInput({
  control,
  register,
  avatar,
  setAvatar,
  setMyAvatar,
}) {
  // const [avatar, setAvatar] = useState(true);
  // const [avatar, setAvatar] = useState(false)
  const [inputImg, setInputImage] = useState(false);
  const userAvatar = useSelector(selectAvatar);
  const avatarUser = (
    <img
      className={css.photo}
      src={inputImg ? inputImg : userAvatar}
      width="100%"
      height="100%"
      alt="Avatar"
    />
  );
  /* const avatarDefault = (
    <svg
      fill="var(--main)"
      // width="62"
      // height="62"
      className={css.svgAvatar}
    >
      <use href={`${sprite}#icon-trash`}></use>
    </svg>
  );*/

  const avatarDefault = (
    <img
      className={css.photo}
      src="./default-avatar.jpg"
      width="100%"
      height="100%"
      alt="Avatar"
    />
  );

  const onChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMyAvatar(file);
      setInputImage(URL.createObjectURL(file));

      const blob = new Blob([file]);
      // console.log(blob);
      const objectURL = URL.createObjectURL(blob);
      // console.log(objectURL);
      setAvatar(objectURL);
    } else {
      setInputImage(false);
    }
  };

  return (
    <div className={css.avatarInput}>
      <div className={css.avatarBox}>
        {userAvatar || inputImg ? avatarUser : avatarDefault}
      </div>
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

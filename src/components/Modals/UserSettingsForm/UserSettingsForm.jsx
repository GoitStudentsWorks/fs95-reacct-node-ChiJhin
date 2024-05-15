import { useForm } from 'react-hook-form';
import { useState } from 'react';
import css from './UserSettingsForm.module.css';
import RadioBtn from './RadioInput/RadioInput';
import AvatarInput from './AvatarInput/AvatarInput';

export default function UserSettingsForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const fg = useForm();
  //   console.log(fg);
  const v = '1.8L';

  const onSubmit = (data) => {
    const file = data.avatar[0];
    console.log(file);
    if (file) {
      const blob = new Blob([file]);
      console.log(blob);
      const objectURL = URL.createObjectURL(blob);
      console.log(objectURL);
      //   setAvatar(objectURL);
    }
    // console.log(control);
    // console.log(data.file); // Обробка даних з інпуту типу файл
    // };
     console.log(data);
  };
  return (
    <>
      {/* =============================== */}
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <AvatarInput control={control} register={register} />
        <div>
          <h3 className={css.titleHender}>Your gender identity</h3>
        </div>
        <RadioBtn
          // handleSubmit={handleSubmit}
          register={register}
        />
        <div className={css.sectionBox}>

        <section>
          <div className={css.box}>
            <label className={css.labelName}>Your name</label>
            <input {...register('lastVolume', { value: v })} />
          </div>

          <div className={css.box}>
            <label className={css.labelName}>Email</label>
            {/* <ErrorMessage name="number" component="span" className={css.span} /> */}
            <input {...register('lastEmail', { required: true })} />
            {errors.lastEmail && <p>Last name is required.</p>}
          </div>

          {/* setValue('firstName', v); */}
          {/* ================================= */}
          <h2 className={css.titleNormaFormula}>My daily norma</h2>
          <ul className={css.listFormula}>
            <li>
              <p>For woman:</p>
              <span>V=(M*0,03) + (T*0,4)</span>
            </li>
            <li>
              <p>For man:</p>
              <span>V=(M*0,04) + (T*0,6)</span>
            </li>
            <li>
              <div className={css.textBox}>
                <p>
                  <span>*</span> V is the volume of the water norm in liters per
                  day, M is your body weight,T is the time of active sports,or
                  another type of activity commensurate in terms of loads (in
                  the absence of these, you must set 0)
                </p>
              </div>
            </li>
            <li>
              <p>
                <span className={css.vector}>!</span>Active time in hours
              </p>
            </li>
          </ul>
        </section>
        {/* =========================================== */}
        <section>
          <div className={css.formKilo}>
            <label>Your weight in kilograms:</label>
            <input {...register('lastKilo')} />
          </div>

          <div className={css.formKilo}>
            <label>The time of active participation in sports:</label>
            <input {...register('lastTime', { required: true })} />
            {errors.lastTime && <p>Last name is required.</p>}
          </div>

          <p className={css.amountWater}>
            The required amount of water in liters per day:<span className={css.amount}>
{v}
            </span>
          </p>

          <div className={css.youWater}>
            <label >
              Write down how much water you will drink:
            </label>
            <input {...register('lastWater')} />
          </div>
        </section>
        </div>
        <button className={css.btnSave} type="submit">
          <span>Save</span>
        </button>
      </form>
    </>
  );
}

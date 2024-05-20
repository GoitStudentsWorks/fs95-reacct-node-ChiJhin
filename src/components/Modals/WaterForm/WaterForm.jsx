import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import css from './WaterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  activeHours: yup.number().required('Введіть кількість активних годин'),
  dailyWaterIntake: yup.number().required('Введіть денну норму води'),
});

export default function WaterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  resolver: yupResolver(schema),
});

  //   підключення Yup не працює треба розібратись
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
const time =new Date()
  const onSubmit = (data) => {
    // Обробка даних форми
    console.log(data);
  };
  handleSubmit((data) => console.log(data));
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formName}>
          <label className={css.labelRecord}>Recording time:</label>
          <input {...register('activeHours',{value: time})} />
          {errors.activeHours && <p>{errors.activeHours.message}</p>}
        </div>
        <p className={css.titleChoose}>Choose a value</p>

        <div className={css.formName}>
          <label className={css.labelEnter}>
            Enter the value of the water used:{' '}
          </label>

          <input {...register('dailyWaterIntake', { required: true,value:'50' })} />
          {errors.dailyWaterIntake && <p>{errors.dailyWaterIntake.message}</p>}
        </div>
        {/* <input {...register('age', { pattern: /\d+/ })} /> */}
        {/* {errors.age && <p>Please enter number for age.</p>} */}
        {/* < input className={css.btnSave} type="submit" /> */}
        <button className={css.btnSave} type="submit">
          <span>Save</span>
        </button>
      </form>
    </>
  );
}

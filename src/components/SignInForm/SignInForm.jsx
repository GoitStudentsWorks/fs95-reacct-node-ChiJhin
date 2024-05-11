import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import css from './SignInForm.module.css';
// import { useDispatch } from 'react-redux';
import { useId } from 'react';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

export default function SignInForm() {
  //   const dispatch = useDispatch();
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmit = (data) => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <input
            className={errors.email ? css.errorInput : css.input}
            placeholder="Enter your email"
            type="text"
            id={emailFieldId}
            {...register('email')}
          />
          {errors.email && <p className={css.error}>{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor={passwordFieldId}>Password</label>
          <input
            className={errors.password ? css.errorInput : css.input}
            placeholder="Enter your password"
            type={passwordVisibility ? 'password' : 'text'}
            id={passwordFieldId}
            {...register('password')}
          />
          <span onClick={handlePasswordVisibility}>
            {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <p className={css.error}>{errors.password?.message}</p>
          )}
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

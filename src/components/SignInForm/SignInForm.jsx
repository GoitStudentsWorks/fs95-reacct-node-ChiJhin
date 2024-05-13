import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import css from './SignInForm.module.css';
// import { useDispatch } from 'react-redux';
import { useId } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

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
    dispatch(login(data));
    reset();
  };

  return (
    <div className={css.container}>
      <div className={css.section}>
        <div className={css.logo}>
          <Logo />
        </div>
        <h1 className={css.title}>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.item}>
            <label htmlFor={emailFieldId} className={css.label}>
              Email
            </label>
            <input
              className={errors.email ? css.errorInput : css.input}
              placeholder="Enter your email"
              type="text"
              id={emailFieldId}
              {...register('email')}
            />
            {errors.email && (
              <p className={css.error}>{errors.email?.message}</p>
            )}
          </div>
          <div className={css.item}>
            <label htmlFor={passwordFieldId} className={css.label}>
              Password
            </label>
            <div className={css.wrapper}>
              <div className={css.cont}>
                <input
                  className={errors.password ? css.errorInput : css.inputTwo}
                  placeholder="Enter your password"
                  type={passwordVisibility ? 'password' : 'text'}
                  id={passwordFieldId}
                  {...register('password')}
                />
                <span className={css.eyes} onClick={handlePasswordVisibility}>
                  {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {errors.password && (
              <p className={css.error}>{errors.password?.message}</p>
            )}
          </div>

          <button type="submit" className={css.btn}>
            Sign In
          </button>
          <p className={css.text}>
            Don`t have an account?
            <Link to="/signup" className={css.link}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

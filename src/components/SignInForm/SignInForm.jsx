import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import css from './SignInForm.module.css';
import Logo from '../Logo/Logo';
import { useId } from 'react';
import { login } from '../../redux/auth/operations';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmit = (data) => {
    dispatch(login(data))
      .unwrap()
      .then(() => {
        console.log('bla');
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  return (
    <div className={css.container}>
      <div className={css.section}>
        <Logo />
        <h1 className={css.title}>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.field}>
            <label htmlFor={emailFieldId} className={css.email}>
              Email
            </label>
            <input
              className={errors.email ? css.errorInput : css.firstInput}
              type="text"
              placeholder="Enter your email"
              id={emailFieldId}
              {...register('email')}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={css.field}>
            <label htmlFor={passwordFieldId} className={css.password}>
              Password
            </label>
            <div className={css.toggle}>
              <input
                className={errors.password ? css.errorIn : css.secondInput}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                id={passwordFieldId}
                {...register('password')}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={css.iconOne}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </div>
            </div>
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className={css.button}>
            Sign In
          </button>
          <p className={css.text}>
            Don`t have an account?
            <Link to="/signup" className={css.link}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

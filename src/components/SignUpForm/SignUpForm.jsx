import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import css from './SignUpForm.module.css';
// import { useDispatch } from 'react-redux';

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Mismatched passwords, please try again.')
    .required('Please confirm your password.'),
});

export default function SignUpForm() {
  //   const dispatch = useDispatch();
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [repeatPasswordVisibility, setRepeatPasswordVisibility] =
    useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisibility(!repeatPasswordVisibility);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            className={errors.email ? css.errorInput : css.input}
            placeholder="Enter your email"
            type="text"
            {...register('email')}
          />
          {errors.email && <p className={css.error}>{errors.email?.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            className={errors.password ? css.errorInput : css.input}
            placeholder="Enter your password"
            type={passwordVisibility ? 'password' : 'text'}
            {...register('password')}
          />
          <span onClick={handlePasswordVisibility}>
            {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.password && (
            <p className={css.error}>{errors.password?.message}</p>
          )}
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            className={errors.repeatPassword ? css.errorInput : css.input}
            placeholder="Repeat password"
            type={repeatPasswordVisibility ? 'password' : 'text'}
            {...register('repeatPassword')}
          />
          <span onClick={handleRepeatPasswordVisibility}>
            {repeatPasswordVisibility ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.repeatPassword && (
            <p className={css.error}>{errors.repeatPassword?.message}</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import css from './WelcomeSection.module.css';

export default function WelcomeSection() {
  return (
    <>
      <Logo />
      <div className={css.welcomeWrapper}>
        <div className={css.welcomContent}>
          <p className={css.text}>Record daily water intake and track</p>
          <h1 className={css.mainTitle}>Water consumption tracker</h1>
          <div className={css.linkWrapper}>
            <NavLink to="/signup" className={css.linkTracker}>
              Try tracker
            </NavLink>
            <NavLink to="/signin" className={css.linkSignIn}>
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

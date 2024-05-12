import UserBar from '../UserBar/UserBar';
import UserBarPopover from '../UserBarPopover/UserBarPopover';
import css from './UserPanel.module.css';

export default function UserPanel({ userName: name }) {
  return (
    <div className={css.wrapper}>
      <h2>Hello, {name}!</h2>
      <div>
        <UserBar userName={name} />
        <UserBarPopover />
      </div>
    </div>
  );
}

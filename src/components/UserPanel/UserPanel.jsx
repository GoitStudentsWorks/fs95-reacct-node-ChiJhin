import UserBar from '../UserBar/UserBar';

export default function UserPanel({ userName: name }) {
  return (
    <>
      <h2>Hello, {name}!</h2>
      <UserBar userName={name} />
    </>
  );
}

import BtnAddWater from '../AddWaterBtn/AddWaterBtn';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function WelcomeSection() {
  return (
    <div>
      <Logo />
      <h1>Water consumption tracker</h1>
      <h2>Record daily water intake and track</h2>
      <Link to="/signup">
        <button type="submit">Try tracker</button>
      </Link>
      <Link to="/signin">
        <button type="submit">Sign In</button>
      </Link>
      <BtnAddWater/>
    </div>
  );
}

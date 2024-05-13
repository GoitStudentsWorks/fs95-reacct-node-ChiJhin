import SignInForm from '../../components/SignInForm/SignInForm';

import WaterModal from '../../components/Modals/WaterModal/WaterModal';

export default function SignInPage() {
  return (
    <main>
      <div>
        <h1>SignIn</h1>
        <SignInForm />

        <WaterModal />
      </div>
    </main>
  );
}

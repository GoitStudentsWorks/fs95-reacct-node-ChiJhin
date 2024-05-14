import SignInForm from '../../components/SignInForm/SignInForm';
import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';

export default function SignInPage() {
  return (
    <main className={css.container}>
      <SignInForm />
      <div className={css.item}>
        <AdvantagesSection />
      </div>
    </main>
  );
}

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import css from '../SignUpPage/SignUpPage.module.css';

export default function SignUpPage() {
  return (
    <main className={css.container}>
      <SignUpForm />
      <div className={css.item}>
        <AdvantagesSection />
      </div>
    </main>
  );
}

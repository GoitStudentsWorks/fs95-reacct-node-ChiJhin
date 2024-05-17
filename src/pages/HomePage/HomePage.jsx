import React from 'react';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn'; // Import the AddWaterBtn component
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.page}>
        <WelcomeSection />
        <AdvantagesSection />
        <AddWaterBtn /> {/* Render the AddWaterBtn component */}
      </div>
    </div>
  );
}


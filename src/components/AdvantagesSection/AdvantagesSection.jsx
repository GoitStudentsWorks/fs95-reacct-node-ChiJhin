import { boy, girlOne, girlTwo } from '../../assets/images';

import css from './AdvantagesSection.module.css';
export default function AdvantagesSection() {
  return (
    // <div>
    //   <div>
    //     <img srcSet="" src="" alt="" height="" width="" />
    //     <p>Our happy customers</p>
    //   </div>

    //   <span>Habit drive</span>
    //   <span>View statistics</span>
    //   <span>Personal rate setting</span>
    // </div>
    <div className={css.section}>
      <div className={css.customersBox}>
        <ul className={css.customerImg}>
          <li className={css.item}>
            <img className={css.img} src={girlOne} alt="first girl" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={boy} alt="boy" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={girlTwo} alt="second girl" />
          </li>
        </ul>

        <p className={css.customerText}>
          Our <span>happy</span> customers
        </p>
      </div>

      <div className={css.benefitsWrapper}>
        <ul className={css.benefitsList}>
          <li className={css.benefitsItem}>
            <div className={css.ellipse}></div>
            <p className={css.text}>Habit drive</p>
          </li>
          <li className={css.benefitsItem}>
            <p className={css.textBlack}>View statistics</p>
          </li>
          <li className={css.benefitsItem}>
            <p className={css.textBlack}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

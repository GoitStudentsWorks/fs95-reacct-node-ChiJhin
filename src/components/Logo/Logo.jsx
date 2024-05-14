import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <>
      <Link to="/" className={css.logoFont}>
        AQUATRACK
      </Link>
    </>
  );
}

// import { Link } from 'react-router-dom';
// import css from './Logo.module.css';

// export default function Logo() {
//   return (
//     <>
//       <Link to="/" className={css.logoFont}>
//         <div className={css.content}>
//           <p>AQUATRACK</p>
//           <p>AQUATRACK</p>
//         </div>
//       </Link>
//     </>
//   );
// }

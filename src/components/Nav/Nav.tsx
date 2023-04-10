import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const navMenu = [
  { route: '/', name: 'APP_NAME' },
  { route: 'collections', name: 'Collections' },
  { route: '/men', name: 'Men' },
  { route: '/women', name: 'Women' },
  { route: '/about', name: 'About' },
  { route: '/contact', name: 'Contact' },
];

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        {navMenu.map((item) => (
          <li className={styles.navItem} key={item.name}>
            <NavLink to={item.route}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;

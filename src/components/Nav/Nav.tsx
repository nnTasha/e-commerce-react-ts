import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.navContainer}>
      <nav>
        <ul>
          <li>
            <Link to="/">APPNAME</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/menpage">Men</Link>
          </li>
          <li>
            <Link to="/womenpage">Women</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;

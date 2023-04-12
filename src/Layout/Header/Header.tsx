import AuxiliaryMenu from '../../components/AuxiliaryMenu/AuxiliaryMenu';
import Nav from '../../components/Nav/Nav';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Nav />
      <AuxiliaryMenu />
    </header>
  );
};
export default Header;

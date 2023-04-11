import { ShoppingIcon } from '../../icons/ShoppingIcon';
import Avatar from '../Avatar/Avatar';

import styles from './AuxiliaryMenu.module.scss';

const AuxiliaryMenu = () => {
  return (
    <div className={styles.auxiliaryContainer}>
      <ShoppingIcon />
      <Avatar />
    </div>
  );
};

export default AuxiliaryMenu;

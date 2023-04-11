import Avatar from '../Avatar/Avatar';
import ShoppingIcon from '../ShoppingIcon/ShoppingIcon';

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

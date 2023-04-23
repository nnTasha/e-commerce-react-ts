import { useState } from 'react';

import { Badge } from 'antd';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { ShoppingIcon } from '../../icons/ShoppingIcon';
import Avatar from '../Avatar/Avatar';

import styles from './AuxiliaryMenu.module.scss';

const AuxiliaryMenu = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartToggle = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className={styles.auxiliaryContainer}>
      <Badge>
        <ShoppingIcon onClick={handleCartToggle} />
      </Badge>
      <Avatar />
      {cartVisible && (
        <ShoppingCart isVisible={cartVisible} onClose={handleCartToggle} />
      )}
    </div>
  );
};

export default AuxiliaryMenu;

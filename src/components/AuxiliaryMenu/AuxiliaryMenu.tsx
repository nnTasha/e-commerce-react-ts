import { useRef, useState } from 'react';

import { Badge } from 'antd';

import { useShoppingCart } from '@/context/ShoppingCartContext';
import Avatar from '../Avatar/Avatar';
import { ShoppingIcon } from '@/icons/ShoppingIcon';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import styles from './AuxiliaryMenu.module.scss';

const AuxiliaryMenu = () => {
  const { cartItemQuantity } = useShoppingCart();
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartToggle = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className={styles.auxiliaryContainer}>
      <Badge count={cartItemQuantity}>
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

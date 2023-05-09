import useProducts from '@/hooks/useProducts';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import ShopCartItem from '../ShopCartItem/ShopCartItem';

import styles from './ShoppingCart.module.scss';
type ShoppingCartProps = {
  isVisible: boolean;
  onClose?: () => void;
};

export default function ShoppingCart({
  isVisible,
  onClose,
}: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  const products = useProducts();

  return (
    <div className={`${styles.cartContainer} ${isVisible ? styles.open : ''}`}>
      <div className={styles.cartHeader}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <ul className={styles.cartContent}>
        {cartItems &&
          cartItems.map((item) => (
            <ShopCartItem key={item.id} id={item.id} quantity={item.quantity} />
          ))}
      </ul>
      <div className={styles.cartSummary}>
        <span className={styles.cartTotal}>
          Total: $
          {cartItems.reduce((total, cartItem) => {
            const item = products.find((item) => item.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </span>
        <button className={styles.cartCheckout}>Checkout</button>
      </div>
    </div>
  );
}

import { useShoppingCart } from '../../context/ShoppingCartContext';
import useProducts from '../../hooks/useProducts';
import { CartItem, Item } from '../../types/types';
import styles from './ShopCartItem.module.scss';

export default function ShopCartItem({ id, quantity }: CartItem) {
  const { removeItem } = useShoppingCart();
  const products = useProducts();

  const item = products.find((item) => id);
  if (item === undefined) return null;

  return (
    <li className={styles.shopCartItem}>
      <img src={item.image} alt="Item image" className={styles.itemImage} />
      <div className={styles.shopCartItemInfo}>
        <h3 className={styles.shopCartItemTitle}>{item.title}</h3>
        <span className={styles.shopCartItemPrice}>${item.price}</span>
        <span className={styles.shopCartItemQuantity}>Qty: {quantity}</span>
      </div>
    </li>
  );
}

import styles from './ShoppingCart.module.scss';

type ShoppingCartProps = {
  isVisible: boolean;
  onClose?: () => void;
};

export default function ShoppingCart({
  isVisible,
  onClose,
}: ShoppingCartProps) {
  return (
    <div className={`${styles.cartContainer} ${isVisible ? styles.open : ''}`}>
      <div className={styles.cartHeader}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <ul className={styles.cartContent}>Cart items go here</ul>
      <div className={styles.cartSummary}>
        <span className={styles.cartTotal}>Total: $0.00</span>
        <button className={styles.cartCheckout}>Checkout</button>
      </div>
    </div>
  );
}

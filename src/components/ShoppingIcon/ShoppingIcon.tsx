import styles from './ShoppingIcon.module.scss';

const ShoppingIcon = () => {
  return (
    <div className={styles.shopIconContainer}>
      <img className={styles.shopIcon} src="/shopping_cart.svg" />
    </div>
  );
};

export default ShoppingIcon;

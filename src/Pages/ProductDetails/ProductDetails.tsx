import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

import styles from './ProductDetails.module.scss';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import InputQuantity from '../../components/InputQuantity/InputQuantity';

export default function ProductDetails() {
  const products = useProducts();
  const { id } = useParams();
  const currentProduct = products.find((p) => p.id === Number(id));

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.productImage}
          src={currentProduct?.image}
          alt={currentProduct?.title}
        />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{currentProduct?.title}</h2>
        <p className={styles.productDescription}>
          {currentProduct?.description}
        </p>
        <p className={styles.productPrice}>${currentProduct?.price}</p>
        <div className={styles.cartControls}>
          <InputQuantity />
          <button className={styles.productButton}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

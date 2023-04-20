import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
  const products = useProducts();
  const { id } = useParams();
  const currentProduct = products.find((p) => p.id === Number(id));

  return (
    <div className={styles.productContainer}>
      <img
        className={styles.productImage}
        src={currentProduct?.image}
        alt={currentProduct?.title}
      />
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{currentProduct?.title}</h2>
        <p className={styles.productDescription}>
          {currentProduct?.description}
        </p>
        <p className={styles.productPrice}>${currentProduct?.price}</p>
        <button className={styles.productButton}>Add to Cart</button>
      </div>
    </div>
  );
}

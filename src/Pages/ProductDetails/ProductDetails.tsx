import { useParams } from 'react-router-dom';
import { useState } from 'react';

import useProducts from '../../hooks/useProducts';
import {
  useShoppingCart,
  ShoppingCartContextData,
} from '../../context/ShoppingCartContext';
import InputQuantity from '../../components/InputQuantity/InputQuantity';

import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
  const products = useProducts();
  const { id } = useParams();
  const currentProduct = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const handleChange = (value: number | null) => {
    if (value === null || value === Number('')) {
      setQuantity(0);
    } else {
      setQuantity(Number(value));
    }
  };

  const { addItemQuantity, cartItems }: ShoppingCartContextData =
    useShoppingCart();

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
          <InputQuantity handleChange={handleChange} />
          <button
            className={styles.productButton}
            onClick={() =>
              addItemQuantity && addItemQuantity(Number(id), quantity)
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import { useParams } from 'react-router-dom';
import { useState } from 'react';

import InputQuantity from '@/components/InputQuantity/InputQuantity';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import useProducts from '@/hooks/useProducts';

import styles from './ProductDetails.module.scss';

export default function ProductDetails() {
  const products = useProducts();
  const { id } = useParams();
  const currentProduct = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const handleItemQuantity = (value: number | null) => {
    const itemQty = value ? Number(value) : 0;
    setQuantity(itemQty);
  };

  const { addItem, cartItems } = useShoppingCart();

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
          <InputQuantity handleChange={handleItemQuantity} />
          <button
            className={styles.productButton}
            onClick={() => addItem(Number(id), quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

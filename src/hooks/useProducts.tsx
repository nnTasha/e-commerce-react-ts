import { useContext } from 'react';
import { ProductsContext } from '@/context/ProductsContext';

const useProducts = () => {
  const { products } = useContext(ProductsContext);

  if (!products) {
    throw new Error('use Products within a ProductsContextProvider');
  }

  return products;
};

export default useProducts;

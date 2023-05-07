import { createContext, useEffect, useState } from 'react';
import { Product, childrenNode } from '../types/types';

interface ProductsContextData {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ProductsContext = createContext<ProductsContextData>({
  products: [],
  loading: false,
  error: null,
});

const ProductsContextProvider = ({ children }: childrenNode) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Products fetching error !');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const value: ProductsContextData = { products, loading, error };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };

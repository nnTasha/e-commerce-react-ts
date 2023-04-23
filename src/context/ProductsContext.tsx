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
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Products fetching error !');
        setLoading(false);
      });
  }, []);

  const value: ProductsContextData = { products, loading, error };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };

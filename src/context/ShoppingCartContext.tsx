import { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, childrenNode } from '../types/types';

export type ShoppingCartContextData = {
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  addItemQuantity: (id: number, qty: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartItemQuantity: number;
};

const ShoppingCartContext = createContext<ShoppingCartContextData>({
  cartItems: [],
  getItemQuantity: (id: number) => 0,
  addItemQuantity: (id: number, qty: number) => {},
  decreaseItemQuantity: (id: number) => {},
  removeItem: (id: number) => {},
  cartItemQuantity: 0,
});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({ children }: childrenNode) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartItemQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addItemQuantity(id: number, qty: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) === undefined) {
        return [...currentItems, { id, quantity: qty }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + qty };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  const value: ShoppingCartContextData = {
    getItemQuantity,
    addItemQuantity,
    decreaseItemQuantity,
    removeItem,
    cartItems,
    cartItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

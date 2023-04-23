import { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, childrenNode } from '../types/types';

export type ShoppingCartContextData = {
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  addItemQuantity: (id: number, qty: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemQuantity: (id: number) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextData>({
  cartItems: [],
  getItemQuantity: (id: number) => 0,
  addItemQuantity: (id: number, qty: number) => {},
  decreaseItemQuantity: (id: number) => {},
  removeItemQuantity: (id: number) => {},
});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({ children }: childrenNode) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addItemQuantity(id: number, qty: number) {
    // debugger;
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

  function removeItemQuantity(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  const value: ShoppingCartContextData = {
    getItemQuantity,
    addItemQuantity,
    decreaseItemQuantity,
    removeItemQuantity,
    cartItems,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

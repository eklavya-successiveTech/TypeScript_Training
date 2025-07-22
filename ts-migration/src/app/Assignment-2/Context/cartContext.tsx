"use client"
import { createContext, useState, ReactNode } from "react";

interface CartContextProps{
    cart: string[];
    addToCart: (newElement:string)=> void;
}
const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps{
    children: ReactNode;
}
const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (newElement:string) => {
    setCart((prevCart) => [...prevCart, newElement]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export {CartContext, CartProvider};
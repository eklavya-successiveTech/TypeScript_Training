"use client"
import { CartProvider } from "../Context/cartContext";
import Products from "./Products";
import Cart from "./Cart";
const Shopping = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Page</h1>
        <Products />
        <Cart />
      </div>
    </CartProvider>
  );
};
export default Shopping;
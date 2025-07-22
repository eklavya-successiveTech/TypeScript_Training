"use client"
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
const Cart = () => {
  const cartcontext = useContext(CartContext);
  if(!cartcontext){
    throw new Error("There is an error in context");
  }
  const {cart} = cartcontext;
  return (
    <div>
      <h2>Cart Items:</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <p>Total Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
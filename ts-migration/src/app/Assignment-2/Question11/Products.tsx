"use client"
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
const Products = () => {
  const productList = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const cartcontext = useContext(CartContext);
  if(!cartcontext){
    throw new Error("There is an error")
  }
  const {addToCart} = cartcontext;
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product}
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;
"use client";
import { ProductThree } from "@/types";
import Link from "next/link";



const products: ProductThree[] = [
  { id: "1", name: "Product One", description: "This is the first product." },
  { id: "2", name: "Product Two", description: "This is the second product." },
  { id: "3", name: "Product Three", description: "This is the third product." },
];


export function getProductById(id: string): ProductThree | undefined {
  return products.find((product) => product.id === id);
}

const Items = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product: ProductThree) => (
          <li key={product.id}>
            <Link href={`/Assignment-3/question-6/items/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;


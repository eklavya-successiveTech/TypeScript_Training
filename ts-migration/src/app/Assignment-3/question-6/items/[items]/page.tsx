'use client';

import { useParams } from 'next/navigation';
import { getProductById } from '@/components/Items';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id as string; 

  const product = getProductById(productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;

'use client';

import { useRouter } from "next/navigation";

const ProductsPage = () => {
  const router = useRouter();

  const handleData = () => {
    router.push("/Assignment-5/question-4/products/1");
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div>
      <button onClick={handleData} style={buttonStyle}>
        Click me to show Data
      </button>
    </div>
  );
};

export default ProductsPage;

"use client"
import React, { useState, useCallback } from 'react';
import Child from './Child';
const Parent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <Child 
        count={count} 
        onIncrement={handleIncrement} 
        onReset={handleReset}
      />
    </div>
  );
};

export default Parent;
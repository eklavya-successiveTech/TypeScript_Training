"use client"
import React, { useState, useCallback } from 'react';

interface ChildProps {
  count: number;
  onIncrement: () => void;
  onReset: () => void;
}

const Child: React.FC<ChildProps> = ({ count, onIncrement, onReset }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment Count</button>
      <button onClick={onReset}>Reset Count</button>
    </div>
  );
};
export default Child;
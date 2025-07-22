"use client"
import React, { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const getStoredValue = (): T => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  };

  const removeStoredValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return {
    value,
    setValue: setStoredValue,
    getValue: getStoredValue,
    removeValue: removeStoredValue
  };
}
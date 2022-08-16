import { useEffect, useState } from 'react';

const useCurrentValues = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [currentMaxValue, setCurrentMaxValue] = useState('0');

  useEffect(() => {
    const savedValue = localStorage.getItem(storageKeys.currentMaxValue);
    if (savedValue) {
      setCurrentMaxValue(savedValue);
    }
  }, []);

  useEffect(() => {
    const savedValue = localStorage.getItem(storageKeys.currentValue);
    if (savedValue) {
      setCurrentValue(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKeys.currentMaxValue, currentMaxValue);
  }, [currentMaxValue]);

  useEffect(() => {
    localStorage.setItem(storageKeys.currentValue, currentValue);
  }, [currentValue]);

  return {
    currentMaxValue,
    currentValue,
    setCurrentValue,
    setCurrentMaxValue,
  };
};

const storageKeys = {
  currentMaxValue: 'currentMaxValue',
  currentValue: 'currentValue',
};

export default useCurrentValues;

import { useEffect, useState } from 'react';

const useInputValue = () => {
  const [maxValue, setMaxValue] = useState('0');
  const [startValue, setStartValue] = useState('0');
  useEffect(() => {
    const value = localStorage.getItem('maxValue');
    if (value) {
      setMaxValue(value);
    }
  }, []);

  useEffect(() => {
    const value = localStorage.getItem('startValue');
    if (value) {
      setStartValue(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maxValue', maxValue);
  }, [maxValue]);

  useEffect(() => {
    localStorage.setItem('startValue', startValue);
  }, [startValue]);

  return {
    maxValue,
    setMaxValue,
    startValue,
    setStartValue,
  };
};

export default useInputValue;

import { useEffect, useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [maxCounter, setMaxCounter] = useState(0);

  useEffect(() => {
    const value = localStorage.getItem('maxCounter');
    if (value) {
      const parsedValue: number = JSON.parse(value);
      setMaxCounter(parsedValue);
    }
  }, []);

  useEffect(() => {
    const value = localStorage.getItem('counter');
    if (value) {
      const parsedValue: number = JSON.parse(value);
      setCounter(parsedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('maxCounter', JSON.stringify(maxCounter));
  }, [maxCounter]);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  return {
    counter,
    maxCounter,
    setCounter,
    setMaxCounter,
  };
};

export default useCounter;

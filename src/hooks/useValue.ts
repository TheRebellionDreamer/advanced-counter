import { ChangeEvent, useEffect, useState } from 'react';

const useValue = () => {
  const [maxValue, setMaxValue] = useState('0');
  const [startValue, setStartValue] = useState('0');

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.value);
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.currentTarget.value);
  };

  useEffect(() => {
    const savedValue = localStorage.getItem(storageKeys.maxValue);
    if (savedValue) {
      setMaxValue(savedValue);
    }
  }, []);

  useEffect(() => {
    const savedValue = localStorage.getItem(storageKeys.startValue);
    if (savedValue) {
      setStartValue(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKeys.maxValue, maxValue);
  }, [maxValue]);

  useEffect(() => {
    localStorage.setItem(storageKeys.startValue, startValue);
  }, [startValue]);

  return {
    maxValue,
    startValue,
    changeMaxValueHandler,
    changeStartValueHandler,
  };
};

const storageKeys = {
  maxValue: 'maxValue',
  startValue: 'startValue',
};

export default useValue;

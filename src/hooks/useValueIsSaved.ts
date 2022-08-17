import { useEffect, useState } from 'react';

const useValueIsSaved = () => {
  const [valueIsSaved, setValueIsSaved] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('saved');
    if (value) {
      const parsedValue: boolean = JSON.parse(value);
      setValueIsSaved(parsedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saved', JSON.stringify(valueIsSaved));
  }, [valueIsSaved]);

  return {
    valueIsSaved,
    setValueIsSaved,
  };
};

export default useValueIsSaved;

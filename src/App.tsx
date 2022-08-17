import { ChangeEvent } from 'react';
import { Counter } from 'components/Counter';
import { ValueSetter } from 'components/ValueSetter';
import { useCounter, useInputValue, useValueIsSaved } from 'hooks';
import classes from './App.module.css';

function App() {
  const { maxValue, startValue, setMaxValue, setStartValue } = useInputValue();
  const { counter, maxCounter, setCounter, setMaxCounter } = useCounter();
  const { valueIsSaved, setValueIsSaved } = useValueIsSaved();
  const setButtonIsDisabled = +maxValue === maxCounter && +startValue === counter;
  const incorrectValue = +maxValue <= +startValue || +startValue < 0;

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (valueIsSaved) {
      setValueIsSaved(false);
    }
    setMaxValue(e.currentTarget.value);
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (valueIsSaved) {
      setValueIsSaved(false);
    }
    setStartValue(e.currentTarget.value);
  };

  const saveChangesHandler = () => {
    setCounter(+startValue);
    setMaxCounter(+maxValue);
    setValueIsSaved(true);
  };

  const resetCounterHandler = () => {
    setCounter(+startValue);
  };

  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ValueSetter
          maxValue={maxValue}
          startValue={startValue}
          onChangeMaxValue={changeMaxValueHandler}
          onChangeStartValue={changeStartValueHandler}
          onSaveChanges={saveChangesHandler}
          setButtonIsDisabled={setButtonIsDisabled}
        />
        <Counter
          saveMessageIsVisible={!valueIsSaved}
          showErrorMessage={incorrectValue}
          counter={counter}
          maxCounter={maxCounter}
          onIncrement={incrementHandler}
          onReset={resetCounterHandler}
        />
      </div>
    </div>
  );
}

export default App;

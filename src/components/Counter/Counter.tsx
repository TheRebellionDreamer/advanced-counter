import cx from 'classnames';
import classes from './Counter.module.css';
import { Box } from 'components/Box';
import { Button } from 'components/Button';
import CounterProps from './Counter.props';

function Counter({
  counter,
  maxCounter,
  saveMessageIsVisible,
  showErrorMessage,
  onIncrement,
  onReset,
}: CounterProps): JSX.Element {
  const incButtonIsDisabled = counter === maxCounter;
  const errorMessageClasses = cx(classes.text, classes.error);
  const counterClasses = cx(classes.text, classes['very-large'], {
    [classes.error]: incButtonIsDisabled,
  });
  return (
    <Box className={classes.root}>
      <Box className={classes['count-container']}>
        {showErrorMessage ? (
          <span className={errorMessageClasses}>Incorrect value</span>
        ) : saveMessageIsVisible ? (
          <span className={classes.text}>Enter values and press 'set'</span>
        ) : (
          <span className={counterClasses}>{counter}</span>
        )}
      </Box>
      <Box className={classes['button-container']}>
        <Button
          uppercase
          disabled={incButtonIsDisabled || saveMessageIsVisible}
          onClick={onIncrement}
        >
          inc
        </Button>
        <Button uppercase onClick={onReset} disabled={saveMessageIsVisible}>
          reset
        </Button>
      </Box>
    </Box>
  );
}

export default Counter;

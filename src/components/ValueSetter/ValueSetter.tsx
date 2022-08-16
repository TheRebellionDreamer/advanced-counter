import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import classes from './ValueSetter.module.css';
import ValueSetterProps from './ValueSetter.props';

function ValueSetter({
  initialMaxValue,
  initialStartValue,
  errorCondition,
  setButtonIsDisabled,
  onChangeMaxValue,
  onChangeStartValue,
  onSet,
}: ValueSetterProps): JSX.Element {
  return (
    <Box className={classes.root}>
      <Box className={classes['input-container']}>
        <Input label='max value:' value={initialMaxValue} onChange={onChangeMaxValue} />
        <Input
          label='start value:'
          value={initialStartValue}
          onChange={onChangeStartValue}
          errorCondition={errorCondition}
        />
      </Box>
      <Box className={classes['button-container']}>
        <Button uppercase disabled={errorCondition || setButtonIsDisabled} onClick={onSet}>
          set
        </Button>
      </Box>
    </Box>
  );
}

export default ValueSetter;

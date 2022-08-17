import { Box } from 'components/Box';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import classes from './ValueSetter.module.css';
import ValueSetterProps from './ValueSetter.props';

function ValueSetter({
  maxValue,
  startValue,
  setButtonIsDisabled,
  onChangeMaxValue,
  onChangeStartValue,
  onSaveChanges,
}: ValueSetterProps): JSX.Element {
  const maxValueLessOrEqualStartValue = +maxValue <= +startValue;
  const startValueLessThenZero = +startValue < 0;
  const rulesOfDisablingButton =
    maxValueLessOrEqualStartValue || startValueLessThenZero || setButtonIsDisabled;

  return (
    <Box className={classes.root}>
      <Box className={classes['input-container']}>
        <Input
          label='max value:'
          value={maxValue}
          onChange={onChangeMaxValue}
          errorCondition={maxValueLessOrEqualStartValue}
        />
        <Input
          label='start value:'
          value={startValue}
          onChange={onChangeStartValue}
          errorCondition={maxValueLessOrEqualStartValue || startValueLessThenZero}
        />
      </Box>
      <Box className={classes['button-containter']}>
        <Button onClick={onSaveChanges} uppercase disabled={rulesOfDisablingButton}>
          set
        </Button>
      </Box>
    </Box>
  );
}

export default ValueSetter;

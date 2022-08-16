import cx from 'classnames';
import InputProps from './Input.props';
import classes from './Input.module.css';

function Input({
  label,
  type = 'number',
  value,
  onChange,
  className,
  labelClass,
  errorCondition,
  ...props
}: InputProps): JSX.Element {
  const labelClasses = cx(labelClass, classes.label);
  const inputClasses = cx(className, classes.input, {
    [classes.error]: errorCondition,
  });
  return (
    <label className={classes.root}>
      <span className={labelClasses}>{label}</span>
      <input type={type} value={value} onChange={onChange} className={inputClasses} {...props} />
    </label>
  );
}

export default Input;

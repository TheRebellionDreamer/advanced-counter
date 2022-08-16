import cx from 'classnames';
import classes from './Button.module.css';
import ButtonProps from './Button.props';

function Button({ children, className, uppercase, ...props }: ButtonProps): JSX.Element {
  const buttonClasses = cx(className, classes.root, {
    [classes.uppercase]: uppercase,
  });
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;

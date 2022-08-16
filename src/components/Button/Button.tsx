import cx from 'classnames';
import classes from './Button.module.css';
import ButtonProps from './Button.props';

function Button({ children, className, ...props }: ButtonProps): JSX.Element {
  const buttonClasses = cx(className, classes.root);
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;

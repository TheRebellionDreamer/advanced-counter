import cx from 'classnames';
import BoxProps from './Box.props';
import classes from './Box.module.css';

function Box({ children, className, ...props }: BoxProps): JSX.Element {
  const boxClasses = cx(className, classes.root);
  return (
    <div className={boxClasses} {...props}>
      {children}
    </div>
  );
}

export default Box;

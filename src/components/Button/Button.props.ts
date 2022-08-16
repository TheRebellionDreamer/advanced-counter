import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  uppercase?: boolean;
}

export default ButtonProps;

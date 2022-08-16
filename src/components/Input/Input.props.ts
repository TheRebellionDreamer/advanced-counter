import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  labelClass?: string;
  errorCondition?: boolean;
}

export default InputProps;

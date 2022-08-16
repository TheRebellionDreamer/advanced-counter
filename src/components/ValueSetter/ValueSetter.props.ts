import { ChangeEvent } from 'react';

interface ValueSetterProps {
  initialMaxValue: string;
  initialStartValue: string;
  errorCondition: boolean;
  setButtonIsDisabled: boolean;
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onSet: () => void;
}

export default ValueSetterProps;

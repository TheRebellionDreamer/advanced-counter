import { ChangeEvent } from 'react';

interface ValueSetterProps {
  maxValue: string;
  startValue: string;
  setButtonIsDisabled: boolean;
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onSaveChanges: () => void;
}

export default ValueSetterProps;

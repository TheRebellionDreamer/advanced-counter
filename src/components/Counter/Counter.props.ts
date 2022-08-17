interface CounterProps {
  maxCounter: number;
  counter: number;
  saveMessageIsVisible: boolean;
  showErrorMessage: boolean;
  onIncrement: () => void;
  onReset: () => void;
}

export default CounterProps;

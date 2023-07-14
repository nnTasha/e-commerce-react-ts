import { InputNumber } from 'rsuite';

import styles from './InputQuantity.module.scss';

type InputNumberProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  style?: React.CSSProperties;
  handleChange?: (
    value: number | string,
    event: React.SyntheticEvent<Element, Event>
  ) => void;
};

export default function InputQuantity({
  min = 1,
  max = 10,
  defaultValue = 1,
  style,
  handleChange,
}: InputNumberProps) {
  return (
    <InputNumber
      className={styles.Input}
      min={min}
      max={max}
      defaultValue={defaultValue}
      style={style}
      onChange={handleChange}
    />
  );
}

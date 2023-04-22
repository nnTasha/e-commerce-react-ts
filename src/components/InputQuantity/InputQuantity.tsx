import { InputNumber } from 'antd';

import styles from './InputQuantity.module.scss';

type InputNumberProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  style?: React.CSSProperties;
};

export default function InputQuantity({
  min = 1,
  max = 10,
  defaultValue = 1,
  style,
}: InputNumberProps) {
  return (
    <InputNumber
      className={styles.Input}
      min={min}
      max={max}
      defaultValue={defaultValue}
      style={style}
    />
  );
}

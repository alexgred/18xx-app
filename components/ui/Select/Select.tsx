import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import SelectLabel from './SelectLabel';
import styles from './Select.module.css';

type SelectProps = {
  children: ReactNode;
  defaultValue: string;
  error?: string;
  label?: string;
} & HTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function SelectComponent({ children, defaultValue, error, label, ...args }, ref) {
    return (
      <SelectLabel className={styles.label} text={label}>
        <select className={styles.select} ref={ref} {...args}>
          <option hidden value="">
            {defaultValue}
          </option>
          {children}
        </select>
        {error}
      </SelectLabel>
    );
  },
);

export default Select;

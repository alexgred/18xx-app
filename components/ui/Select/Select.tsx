import {
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import Label from './Label';

type SelectProps = {
  children: ReactNode;
  defaultValue: string;
  label?: string;
};

const Select = function Select(
  {
    children,
    defaultValue,
    label,
    ...args
  }: SelectProps & HTMLAttributes<HTMLSelectElement>,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <Label text={label}>
      <select {...args} ref={ref}>
        <option hidden value="default">
          {defaultValue}
        </option>
        {children}
      </select>
    </Label>
  );
};

// FIXME: forwardRef typing in import
export default forwardRef(Select);

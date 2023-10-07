import { HTMLAttributes, ReactNode } from 'react';

export default function SelectLabel({
  children,
  text,
  ...args
}: {
  children: ReactNode;
  text?: string;
} & HTMLAttributes<HTMLLabelElement>) {
  if (text) {
    return (
      <label {...args}>
        {text}
        {children}
      </label>
    );
  } else {
    return <>{children}</>;
  }
}

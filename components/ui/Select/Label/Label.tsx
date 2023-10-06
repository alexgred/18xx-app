import { ReactNode } from 'react';

export default function Label({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) {
  if (text) {
    return (
      <label>
        {text}
        {children}
      </label>
    );
  } else {
    return <>{children}</>;
  }
}

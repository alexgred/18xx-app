'use client';

import { SWRConfig } from 'swr';

export default function SWRProvider({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: any;
}) {
  const q = {
    fallback: {
      '/api': fallback,
    }
  };

  console.log(q.fallback);

  return (
    <SWRConfig value={{...q}}>
      {children}
    </SWRConfig>
  );
}

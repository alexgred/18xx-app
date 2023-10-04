'use client';

import { SWRConfig } from 'swr';

export default function SWRProvider({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: any;
}) {
  const config = {
    fallback: {
      '/api': fallback,
    }
  };

  return <SWRConfig value={{ ...config }}>{children}</SWRConfig>;
}

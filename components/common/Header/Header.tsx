'use client';

import { useRef, useState } from 'react';
import styles from './Header.module.css';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function Header() {
  const ref = useRef<number>(0);
  ref.current = ref.current + 1;
  console.log(ref.current);

  const { cache, fallbackData } = useSWRConfig();
  console.log(fallbackData);

  const [q] = useState<any>(cache?.get('/api1'));

  const { data } = useSWR('/api1', fetcher);
  console.log('data', data);

  return <header className={styles.header} />;
}

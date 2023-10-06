'use client';

import useSWR from 'swr';
import styles from './Bank.module.css';
import { fetcher } from '@/lib/fetcher';

export default function Bank() {
  const { data } = useSWR('/api', fetcher);
  const total = data.games[0]?.bank || 0;

  return (
    <div className={styles.bank}>
      <div>
        <span className={styles.title}>Bank:</span>
        <span className={styles.value}>{total}</span>
      </div>
    </div>
  );
}

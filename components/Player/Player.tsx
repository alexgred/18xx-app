'use client';

import { useRef } from 'react';
import styles from './Player.module.css';
import { useStore } from '@/hooks/useStore';

export default function Player({
  name,
  total,
}: {
  name: string;
  total: number;
}) {
  const ref = useRef(0);
  ref.current++;
  console.log(name, ref.current);

  const { state } = useStore();

  return (
    <div className={styles.player}>
      <div className={styles.name}>{name}</div>
      <div className={styles.total}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{total}</span>
      </div>
    </div>
  );
}

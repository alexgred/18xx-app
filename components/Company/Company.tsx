'use client';

import { ChangeEvent, useState } from 'react';
import styles from './Company.module.css';

export default function Company({
  name,
  total,
}: {
  name: string;
  total: number;
}) {
  const [treasury, setTreasury] = useState<number>(total);
  const [income, setIncome] = useState<number>(0);

  function handleIncomeChange(event: ChangeEvent<HTMLInputElement>) {
    setIncome(event.target!.valueAsNumber);
  }

  function handleTreasuryChange() {
    setTreasury(() => treasury + income);
  }

  return (
    <div className={styles.company}>
      <div className={styles.name}>{name}</div>
      <div className={styles.total}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{treasury}</span>
      </div>

      <div className={styles.controls}>
        <input type="number" step="10" onChange={handleIncomeChange} />
        <button type="button" onClick={handleTreasuryChange}>
          Hold
        </button>
        <button type="button">
          Dividend
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
}

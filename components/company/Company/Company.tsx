'use client';

import { ChangeEvent, useState } from 'react';
import styles from './Company.module.css';
import { FormBuyTrain } from '@/components/forms';
import FormCompanyIncome from '@/components/forms/FormCompanyIncome';

export default function Company({
  name,
  total,
}: {
  name: string;
  total: number;
}) {

  return (
    <div className={styles.company}>
      <div className={styles.name}>{name}</div>
      <div className={styles.total}>
        <span className={styles.label}>Total:</span>
        <span className={styles.value}>{total}</span>
      </div>

      <div className={styles.controls}>
        <FormCompanyIncome />
        <FormBuyTrain />
        <button type="button">Edit</button>
      </div>
    </div>
  );
}

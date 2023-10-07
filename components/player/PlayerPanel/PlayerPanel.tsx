'use client';

import FormBuyTrain from '@/components/forms/FormBuyTrain';
import styles from './PlayerPanel.module.css';
import FormPlayerIncome from '@/components/forms/FormPlayerIncome';

export default function PlayerPanel() {

  return (
    <div className={styles.panel}>
      <FormBuyTrain />
      <FormPlayerIncome />
    </div>
  );
}

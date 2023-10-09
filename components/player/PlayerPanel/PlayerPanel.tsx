'use client';

import styles from './PlayerPanel.module.css';
import { FormPlayerIncome } from '@/components/forms';

export default function PlayerPanel() {
  return (
    <div className={styles.panel}>
      <FormPlayerIncome />
    </div>
  );
}

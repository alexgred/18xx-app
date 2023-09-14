'use client';

import styles from './Bank.module.css';

export default function Bank() {
  return (
    <div className={styles.bank}>
      <div>
        <span className={styles.title}>Bank:</span>
        <span className={styles.value}>123</span>
      </div>
    </div>
  );
}

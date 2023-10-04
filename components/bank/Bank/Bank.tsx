import styles from './Bank.module.css';

export default function Bank({ total }: { total: number }) {

  return (
    <div className={styles.bank}>
      <div>
        <span className={styles.title}>Bank:</span>
        <span className={styles.value}>{total}</span>
      </div>
    </div>
  );
}

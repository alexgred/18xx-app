import styles from './Player.module.css';

export default function Player({
  name,
  total,
}: {
  name: string;
  total: number;
}) {
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

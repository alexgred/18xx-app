import Bank from '@/components/Bank/Bank';
import styles from './page.module.css';

export default function Page1862() {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>content</div>
      <div className={styles.side}>
        <Bank />
      </div>
    </div>
  );
}

import Bank from '@/components/Bank/Bank';
import PlayerSection from '@/components/PlayerSection/PlayerSection';
import styles from './page.module.css';

export default function Page1862() {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <PlayerSection />
      </div>
      <div className={styles.side}>
        <Bank />
      </div>
    </div>
  );
}

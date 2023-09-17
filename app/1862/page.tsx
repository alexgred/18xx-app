import Bank from '@/components/Bank/Bank';
import PlayersSection from '@/components/PlayersSection/PlayersSection';
import CompaniesSection from '@/components/CompaniesSection/CompaniesSection';
import styles from './page.module.css';
import Tools from '@/components/Tools/Tools';

export default function Page1862() {
  return (
    <div className={styles.layout}>
      <div className={styles.main}>
        <PlayersSection />
        <CompaniesSection />
      </div>
      <div className={styles.side}>
        <Bank />
        <Tools />
      </div>
    </div>
  );
}

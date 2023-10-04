import styles from './BankLayout.module.css';
import Dividend from '../Dividend';

export default function BankLayout() {
  return (
    <div className={styles.tools}>
      <div className={styles.title}>Tools:</div>
      <div>
        <Dividend />
      </div>
    </div>
  );
}

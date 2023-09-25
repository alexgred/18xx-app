import styles from './Tools.module.css';
import Dividend from '../Dividend';

export default function Tools() {

  return (
    <div className={styles.tools}>
      <div className={styles.title}>
        Tools:
      </div>
      <div>
        <Dividend />
      </div>
    </div>
  );
}

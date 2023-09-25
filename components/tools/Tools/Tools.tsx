import styles from './Tools.module.css';
import ToolsDividend from '../ToolsDividend/ToolsDividend';

export default function Tools() {

  return (
    <div className={styles.tools}>
      <div className={styles.title}>
        Tools:
      </div>
      <div>
        <ToolsDividend />
      </div>
    </div>
  );
}

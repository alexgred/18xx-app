import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={`${styles.navigation} ${styles.container}`}>
        <Link href="/rules">Rules</Link>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}

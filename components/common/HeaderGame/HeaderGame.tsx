import Link from 'next/link';
import styles from './HeaderGame.module.css';

export default function HeaderGame() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/rules">Rules</Link>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
}

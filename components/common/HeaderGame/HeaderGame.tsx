import Link from 'next/link';
import styles from './HeaderGame.module.css';
import { ChartBarIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';

export default function HeaderGame() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.navigation}`}>
        <div className={styles.menu}>
          <Link href="/" title="Home" className={styles.icon}>
            <HomeIcon />
          </Link>
          <Link href="/1862/stats" className={styles.icon}>
            <ChartBarIcon />
          </Link>
        </div>
        <div className={styles.menu}>
          <Link href="/login" title="Login" className={styles.icon}>
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

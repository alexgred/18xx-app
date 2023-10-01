import HeaderGame from '@/components/common/HeaderGame';
import styles from './layout.module.css';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <HeaderGame />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

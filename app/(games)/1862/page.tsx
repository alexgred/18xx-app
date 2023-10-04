import { Bank, Tools } from '@/components/bank';
import { Players } from '@/components/player';
import { Companies } from '@/components/company';
import getGame from '@/actions/getGame';
import styles from './page.module.css';
import SWRProvider from '@/components/providers/SWRProvider';

export default async function Page1862() {
  const { games } = await getGame();
  const total = games[0].bank;

  return (
    <SWRProvider fallback={games}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <Players />
          <Companies />
        </div>
        <div className={styles.side}>
          <Bank total={total} />
          <Tools />
        </div>
      </div>
    </SWRProvider>
  );
}

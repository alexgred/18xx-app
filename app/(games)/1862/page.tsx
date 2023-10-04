import { Bank, Tools } from '@/components/bank';
import { Players } from '@/components/player';
import getGame from '@/actions/getGame';
import styles from './page.module.css';
import SWRProvider from '@/components/providers/SWRProvider';
import { CompanyLayout } from '@/components/company';

export default async function Page1862() {
  const data = await getGame();
  const total = data.games[0].bank;

  return (
    <SWRProvider fallback={data}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <Players />
          <CompanyLayout />
        </div>
        <div className={styles.side}>
          <Bank total={total} />
          <Tools />
        </div>
      </div>
    </SWRProvider>
  );
}

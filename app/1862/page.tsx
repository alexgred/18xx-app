import Bank from '@/components/tools/Bank/Bank';
import Players from '@/components/player/Players/Players';
import Companies from '@/components/company/Companies/Companies';
import Tools from '@/components/tools/Tools/Tools';
import getGame from '@/actions/getGame';
import styles from './page.module.css';


export default async function Page1862() {
  const { games } = await getGame();
  const total = games[0].bank;

  return (
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
  );
}

import Player from '../Player';
import styles from './Players.module.css';
import getGame from '@/actions/getGame';

export default async function Players() {
  const { players } = await getGame();

  const list = players?.map((player: Player) => (
    <Player key={player.id} name={player.name} total={player.total} />
  ));

  return <div className={styles.items}>{list}</div>;
}

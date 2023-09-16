import json from '@/data/players.json';
import Player from '../Player/Player';
import styles from './PlayersSection.module.css';

export default function PlayersSection() {
  const list = json.players?.map((player) => (
    <Player key={player.id} name={player.name} total={player.total} />
  ));

  return (
    <div className={styles.items}>
      {list}
    </div>
  );
}

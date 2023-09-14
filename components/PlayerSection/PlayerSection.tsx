import Player from '../Player/Player';
import json from './players.json';

export default function PlayerSection() {
  const list = json.players?.map((player) => (
    <Player key={player.id} name={player.name} total={player.total} />
  ));

  return (
    <div>{list}</div>
  );
}

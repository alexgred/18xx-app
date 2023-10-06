'use client';

import useSWR from 'swr';
import Player from '../Player';
import styles from './PlayerLayout.module.css';
import { fetcher } from '@/lib/fetcher';

export default function PlayerLayout() {
  const { data } = useSWR('/api', fetcher);

  const list = data?.players?.map((player: Player) => (
    <Player key={player.id} name={player.name} total={player.total} />
  ));

  return <div className={styles.items}>{list}</div>;
}

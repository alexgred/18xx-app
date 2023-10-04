'use client';

import useSWR from 'swr';
import Player from '../Player';
import styles from './Players.module.css';
import getGame from '@/actions/getGame';
import { fetcher } from '@/lib/fetcher';

export default function Players() {
  const { data, isLoading, error } = useSWR('/api', fetcher);

  const list = data?.players?.map((player: Player) => (
    <Player key={player.id} name={player.name} total={player.total} />
  ));

  return <div className={styles.items}>{list}</div>;
}

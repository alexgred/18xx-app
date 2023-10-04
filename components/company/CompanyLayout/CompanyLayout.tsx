'use client';

import useSWR from 'swr';
import Company from '../Company';
import AddCompany from './AddCompany/AddCompany';
import styles from './CompanyLayout.module.css';
import { fetcher } from '@/lib/fetcher';
import { useRenderCount } from '@/hooks';
import getGame from '@/actions/getGame';

export default function CompanyLayout() {
  const { data, isLoading } = useSWR('/api', fetcher);
  // const { companies } = await getGame();

  const count = useRenderCount();

  console.log('count', count);

  const list =
    !isLoading &&
    data?.companies?.map((company: Company) => (
      <Company key={company.id} name={company.name} total={company.total} />
    ));

  return (
    <div className={styles.items}>
      {list}
      <AddCompany />
    </div>
  );
}

'use client';

import useSWR from 'swr';
import Company from '../Company';
import AddCompany from './AddCompany/AddCompany';
import styles from './CompanyLayout.module.css';
import { fetcher } from '@/lib/fetcher';

export default function CompanyLayout() {
  const { data } = useSWR('/api', fetcher);

  const list = data.companies?.map((company: Company) => (
      <Company key={company.id} id={company.id} name={company.name} total={company.total} />
    ));

  return (
    <div className={styles.items}>
      {list}
      <AddCompany />
    </div>
  );
}

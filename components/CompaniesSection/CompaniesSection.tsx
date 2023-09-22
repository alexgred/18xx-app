'use client';

import Company from '../Company/Company';
import styles from './CompaniesSection.module.css';
// import json from '../../data/companies.json';
import AddCompany from './AddCompany/AddCompany';
import { useStore } from '@/hooks/useStore';

export default function CompaniesSection() {
  const { state } = useStore();
  const list = state.companies?.map((company: Company) => (
    <Company key={company.id} name={company.name} total={company.total} />
  ));

  return (
    <div className={styles.items}>
      {list}
      <AddCompany />
    </div>
  );
}

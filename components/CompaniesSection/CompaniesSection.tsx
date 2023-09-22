'use client';

import Company from '../Company/Company';
import styles from './CompaniesSection.module.css';
// import json from '../../data/companies.json';
import AddCompany from './AddCompany/AddCompany';
import { useStore } from '@/hooks/useStore';
import { useRef } from 'react';

export default function CompaniesSection() {
  const { state } = useStore();

  const ref = useRef(0);
  ref.current++;
  console.log('qqq', ref.current);

  const list = state.companies?.map((company: Company) => (
    <Company
      counter={company.name}
      key={company.id}
      name={company.name}
      total={company.total}
    />
  ));

  return (
    <div className={styles.items}>
      {list}
      <AddCompany />
    </div>
  );
}

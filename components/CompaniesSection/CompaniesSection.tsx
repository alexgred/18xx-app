import Company from '../Company/Company';
import styles from './CompaniesSection.module.css';
import json from '../../data/companies.json';

export default function CompaniesSection() {
  const list = json.companies?.map((companies) => (
    <Company key={companies.id} name={companies.name} total={companies.total} />
  ));

  return (
    <div className={styles.items}>
      {list}
    </div>
  );
}
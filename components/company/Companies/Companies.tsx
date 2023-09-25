import Company from '../Company';
import AddCompany from './AddCompany/AddCompany';
import styles from './Companies.module.css';
import getGame from '@/actions/getGame';

export default async function Companies() {
  const { companies } = await getGame();

  const list = companies?.map((company: Company) => (
    <Company key={company.id} name={company.name} total={company.total} />
  ));

  return (
    <div className={styles.items}>
      {list}
      <AddCompany />
    </div>
  );
}

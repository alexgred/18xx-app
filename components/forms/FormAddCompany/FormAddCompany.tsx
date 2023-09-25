'use client';

import config from '@/configs/companies-1862.json';

interface ICompany {
  id: number;
  name: string;
}

export default function FormAddCompany() {
  const list = config.companies?.map((company: ICompany) => {
    return (
      <option value={company.id}>{company.name}</option>
    )
  });

  return (
    <form action="">
      <input type="text" placeholder="Company name" />
      <select name="companies" defaultValue="2">
        {list}
      </select>
      <button type="submit">Add</button>
    </form>

  );
}
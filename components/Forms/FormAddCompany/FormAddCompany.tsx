'use client';

import config from '@/configs/companies-1862.json';
import { useStore } from '@/hooks/useStore';
import { ChangeEvent, useState } from 'react';

export default function FormAddCompany() {
  const [name, setName] = useState<string>('');
  const { state, dispatch } = useStore();
  const list = config.companies?.map((company: CompanyItem) => {
    return (
      <option key={company.id} value={company.id}>
        {company.name}
      </option>
    );
  });

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  console.log(state);

  return (
    <div>
      <input onChange={handleName} type="text" placeholder="Company name" />
      <select name="companies" defaultValue="2">
        {list}
      </select>
      <button
        onClick={() =>
          dispatch({
            type: 'addCompany',
            companies: [
              {
                id: 5,
                name: name,
                total: 12,
                director: 2,
              },
            ],
          })
        }
        type="submit">
        Add
      </button>
    </div>
  );
}

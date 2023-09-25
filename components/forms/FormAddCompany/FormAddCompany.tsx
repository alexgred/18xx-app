'use client';

import { fetcher } from '@/lib/fetcher';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';

type Price = 70 | 80 | 90 | 100;

export default function FormAddCompany() {
  const { data, error, isLoading, mutate } = useSWR(
    '/api/1862/settings',
    fetcher,
  );
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const listName =
    !isLoading &&
    data?.data?.companies?.map((company: string, index: number) => {
      return (
        <option key={index} value={index}>
          {company}
        </option>
      );
    });

  const priceArr: Price[] = [70, 80, 90, 100];
  const listPrice = priceArr.map((price: Price, index: number) => {
    return (
      <option key={index} value={price}>
        {price}
      </option>
    );
  });

  function handleName(event: ChangeEvent<HTMLSelectElement>) {
    setName(event.target.value);
  }

  function handlePrice(event: ChangeEvent<HTMLSelectElement>) {
    setName(event.target.value);
  }

  function handleSubmit() {
    const qq: any = { companies: [...data?.data?.companies, 'QAR'] };

    return mutate(fetcher('/api/1862/settings', { method: 'POST', body: JSON.stringify(qq) }), {
    });
  }

  console.log(data);

  return (
    <div>
      <select onChange={handleName} name="companies" defaultValue="2">
        {listName}
      </select>
      <select onChange={handlePrice} name="price" defaultValue="1">
        {listPrice}
      </select>
      <button onClick={handleSubmit} type="button">
        Add
      </button>
    </div>
  );
}

'use client';

import { fetcher } from '@/lib/fetcher';
import { ChangeEvent, ReactNode, useState } from 'react';
import useSWR from 'swr';

type Price = 70 | 80 | 90 | 100;

export default function FormAddCompany() {
  const { data, isLoading, mutate } = useSWR('/api', fetcher);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [director, setDirector] = useState<number>(0);

  const settings = data?.data?.settings?.companies || [];
  const companies = data?.data?.companies || [];
  const players = data?.data?.players || [];

  const listName: ReactNode =
    !isLoading &&
    settings.map((company: string) => (
      <option key={company} value={company}>
        {company}
      </option>
    ));

  const priceArr: Price[] = [70, 80, 90, 100];
  const listPrice: ReactNode = priceArr.map((value: Price) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  const listDirector: ReactNode = players.map((value: Player) => (
    <option key={value.id} value={value.id}>
      {value.name}
    </option>
  ));

  function handleName(event: ChangeEvent<HTMLSelectElement>) {
    setName(event.target?.value);
  }

  function handlePrice(event: ChangeEvent<HTMLSelectElement>) {
    setPrice(Number(event.target?.value));
  }

  function handleDirector(event: ChangeEvent<HTMLSelectElement>) {
    setDirector(Number(event.target?.value));
  }

  function handleSubmit() {
    const newCompany = {
      companies: [
        ...companies,
        {
          id: companies.length,
          name,
          total: price * 10,
          director,
        },
      ],
    };

    return mutate(
      fetcher('/api', {
        method: 'POST',
        body: JSON.stringify({ ...data?.data, ...newCompany }),
      }),
    );
  }

  return (
    <div>
      <select onChange={handleName} name="companies">
        <option value="default">Select company</option>
        {listName}
      </select>
      <select onChange={handlePrice} name="price">
        <option value="default">Select price</option>
        {listPrice}
      </select>
      <select onChange={handleDirector} name="director">
        <option value="default">Select Director</option>
        {listDirector}
      </select>
      <button onClick={handleSubmit} type="button">
        Add
      </button>
    </div>
  );
}

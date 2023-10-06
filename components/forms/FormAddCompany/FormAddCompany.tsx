'use client';

import { Select } from '@/components/ui';
import { fetcher } from '@/lib/fetcher';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

type Price = 70 | 80 | 90 | 100;

type FormData = {
  name: string;
  price: Price;
  director: string;
};

export default function FormAddCompany() {
  const { data, mutate } = useSWR('/api', fetcher);
  const settings = data?.settings?.companies || [];
  const companies = data?.companies || [];
  const players = data?.players || [];

  const { register, handleSubmit } = useForm<FormData>();

  const listName: ReactNode = settings.map((company: string) => (
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

  function onSubmit({ name, price, director }: FormData) {
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
        body: JSON.stringify({ ...data, ...newCompany }),
      }),
      {
        revalidate: false,
      },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...register('name', { required: true })}
        defaultValue="Select name"
        label='Company name'>
        {listName}
      </Select>
      <label>
        Share price
        <select {...register('price', { required: true })}>
          <option hidden value="default">
            Select price
          </option>
          {listPrice}
        </select>
      </label>
      <label>
        Director
        <select {...register('director', { required: true })}>
          <option hidden value="default">
            Select Director
          </option>
          {listDirector}
        </select>
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

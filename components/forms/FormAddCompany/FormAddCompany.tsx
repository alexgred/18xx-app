'use client';

import { Select } from '@/components/ui';
import { fetcher } from '@/lib/fetcher';
import { ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';
import styles from './FormAddCompany.module.css';

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const requiredMessage: string = 'Required field';

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

    mutate(
      fetcher('/api', {
        method: 'POST',
        body: JSON.stringify({ ...data, ...newCompany }),
      }),
      {
        revalidate: false,
      },
    );

    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...register('name', { required: requiredMessage })}
        defaultValue="Select name"
        error={errors?.name?.message}
        label="Company name">
        {listName}
      </Select>
      <Select
        {...register('price', { required: requiredMessage })}
        defaultValue="Select price"
        error={errors?.price?.message}
        label="Share price">
        {listPrice}
      </Select>
      <Select
        {...register('director', { required: requiredMessage })}
        defaultValue="Select director"
        error={errors?.price?.message}
        label="Director">
        {listDirector}
      </Select>
      <button disabled={!isValid}>Add</button>
    </form>
  );
}

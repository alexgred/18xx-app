'use client';

import { Select } from '@/components/ui';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styles from './FormBuyTrain.module.css';

type Train = {
  name: string;
  price: number;
};

type FormData = {
  price: Train;
};

const trains: Train[] = [
  {
    name: '2',
    price: 80,
  },
  {
    name: '3',
    price: 180,
  },
  {
    name: '4',
    price: 300,
  },
  {
    name: '5',
    price: 400,
  },
];

export default function FormBuyTrain({id}: {id: number}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>();

  const list: ReactNode = trains.map((train: Train) => (
    <option key={train.name} value={train.price}>
      {train.name}
    </option>
  ));

  function onSubmit({ price }: FormData) {
    console.log({ price }, id);
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Select
        defaultValue="Select train"
        {...register('price', {
          required: 'Required field',
          valueAsNumber: true,
        })}>
        {list}
      </Select>
      <button disabled={!isValid}>Buy train</button>
    </form>
  );
}

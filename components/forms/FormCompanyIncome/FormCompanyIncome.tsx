'use client';

import { useForm } from 'react-hook-form';
import styles from './FormCompanyIncome.module.css';
import useSWRMutation from 'swr/mutation';
import { fetcher } from '@/lib/fetcher';

type FormData = {
  income: number;
};



async function updateCompany(key: string, { arg }: { arg: string }) {
  await fetcher(key, {
    method: 'POST',
    body: JSON.stringify({ arg }),
  });
}

export default function FormCompanyIncome({ id }: { id: number }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const { trigger } = useSWRMutation('/api', updateCompany);

  function onSubmit({ income }: FormData) {
    console.log({ income }, id);
    reset();
  }

  return (
    <form className={styles.form}>
      <label>
        Income
        <input
          type="number"
          {...register('income', {
            required: true,
            valueAsNumber: true,
            min: {
              value: -9999,
              message: 'Too Many Characters',
            },
            max: {
              value: 9999,
              message: 'Too Many Characters',
            },
          })}
        />
        {errors?.income?.message}
      </label>
      <button
        disabled={!isValid}
        type="button"
        onClick={handleSubmit(onSubmit)}>
        Hold
      </button>
      <button disabled={!isValid} type="button">
        Dividend
      </button>
    </form>
  );
}

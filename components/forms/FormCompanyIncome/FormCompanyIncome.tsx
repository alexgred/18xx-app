'use client';

import { useForm } from 'react-hook-form';
import styles from './FormCompanyIncome.module.css';

type FormData = {
  income: number;
};

export default function FormCompanyIncome() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  function onSubmit({ income }: FormData) {
    console.log({ income });
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

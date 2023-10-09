'use client';

import { useForm } from 'react-hook-form';
import styles from './FormPlayerIncome.module.css';

type FormData = {
  income: number;
};

export default function FormPlayerIncome() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({mode: 'onChange'});

  function onSubmit({ income }: FormData) {
    console.log({ income });
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      </label>
      {errors?.income?.message}
      <p>{isValid}</p>
      <button disabled={!isValid}>Income</button>
    </form>
  );
}

'use client';

import { ChangeEvent, useState } from 'react';

export default function Dividend() {
  const [dividend, setDividend] = useState<number>(0);

  function handleDividendChange(event: ChangeEvent<HTMLInputElement>) {
    setDividend(event.target!.valueAsNumber);
  }

  return (
    <div>
      <div>Dividend</div>
      <input
        type="number"
        defaultValue="0"
        min="0"
        step="10"
        onChange={handleDividendChange}
      />
      <div>
        <span>10%:</span> {dividend / 10}
      </div>
      <div>
        <span>20%:</span> {(dividend / 10) * 2}
      </div>
      <div>
        <span>30%:</span> {(dividend / 10) * 3}
      </div>
      <div>
        <span>40%:</span> {(dividend / 10) * 4}
      </div>
      <div>
        <span>50%:</span> {(dividend / 10) * 5}
      </div>
      <div>
        <span>60%:</span> {(dividend / 10) * 6}
      </div>
    </div>
  );
}

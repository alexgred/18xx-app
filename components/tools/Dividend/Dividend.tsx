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
        {dividend / 10}
        <span> per share</span>
      </div>
    </div>
  );
}

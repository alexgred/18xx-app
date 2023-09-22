'use client';

import { ChangeEvent, useRef, useState } from 'react';

export default function ToolsDividend({counter = ''}: {counter: string}) {
  const [dividend, setDividend] = useState<number>(0);
  const ref = useRef(0);
  ref.current++;
  console.log(counter, ref.current);

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

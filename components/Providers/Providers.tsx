'use client';

import BankContext from '@/context/Context';
import { useReducer } from 'react';

interface State {
  bank: number;
  players: Player[];
  companies: Company[];
}

interface Action extends State {
  type: 'addCompany';
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addCompany': {
      console.log('aas', action);
      return {
        ...state,
        companies: [...state.companies, action.companies[0]],
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState: State = {
  bank: 15000,
  players: [
    { id: 0, name: 'Player 1', total: 12 },
    { id: 1, name: 'Player 2', total: 812 },
    { id: 2, name: 'Player 3', total: 87 },
  ],
  companies: [
    {
      id: 0,
      name: 'Company 1',
      total: 12,
      director: 2,
    },
    {
      id: 1,
      name: 'Company 2',
      total: 12,
      director: 2,
    },
    {
      id: 2,
      name: 'Company 3',
      total: 12,
      director: 1,
    },
    {
      id: 4,
      name: 'Company 4',
      total: 12,
      director: 0,
    },
  ],
};

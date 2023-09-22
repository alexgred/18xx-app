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

export default function Providers({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State;
}) {
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



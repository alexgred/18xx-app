import { createContext } from 'react';

const Context = createContext<{
  state: any;
  dispatch: any;
}>({ state: {}, dispatch: () => null });

export default Context;

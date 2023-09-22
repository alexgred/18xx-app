import Context from '@/context/Context';
import { useContext } from 'react';

export function useStore() {
  return useContext(Context);
}
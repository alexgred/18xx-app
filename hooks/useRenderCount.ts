import { useRef } from "react";

export default function useRenderCount(): number {
  const ref = useRef<number>(0);
  ref.current += 1;

  return ref.current;
}
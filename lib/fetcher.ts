import { Fetcher } from "swr";

type Args = [input: RequestInfo | URL, init?: RequestInit | undefined];

export async function fetcher(...args: Args): Promise<any> {
  return await fetch(...args).then((res) => res.json());
}

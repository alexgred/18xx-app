type Args = [input: RequestInfo | URL, init?: RequestInit | undefined];

export function fetcher(...args: Args) {
  return fetch(...args).then((res) => res.json());
}

type Args = [input: RequestInfo | URL, init?: RequestInit | undefined];

export async function fetcher(...args: Args) {
  return await fetch(...args).then((res) => res.json());
}

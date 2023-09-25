export default async function getGame() {
  const res: Response = await fetch('http://localhost:3001/api');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

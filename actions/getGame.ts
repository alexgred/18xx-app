export default async function getGame() {
  const res = await fetch('http://localhost:3001/api');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

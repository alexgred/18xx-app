export default async function getSettings() {
  const res: Response = await fetch('http://localhost:3001/api/settings');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

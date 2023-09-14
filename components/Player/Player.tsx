export default function Player({
  name,
  total,
}: {
  name: string;
  total: number;
}) {
  return (
    <div>
      <div>{name}</div>
      <div>
        <span>Total:</span>
        <span>{total}</span>
      </div>
    </div>
  );
}

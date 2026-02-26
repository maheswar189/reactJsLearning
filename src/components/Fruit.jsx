export default function Fruit({ name, emoji, price }) {
  return (
    <li>
      {/**{emoji} {name} - ${price} */}

      {price > 2
        ? `${emoji} ${name} - $${price} (Expensive)`
        : `${emoji} ${name} - $${price} (Affordable)`}
    </li>
  );
}

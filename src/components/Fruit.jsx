export default function Fruit({ name, emoji, price, soldout }) {
  return (
    <div>
      {/**  <li>*/}
      {/**{emoji} {name} - ${price} */}

      {/**   {price > 2
          ? `${emoji} ${name} - $${price} (Expensive)`
          : `${emoji} ${name} - $${price} (Affordable)`}
          */}
      {/**  </li>*/}
      <h1>
        {" "}
        {emoji} {name} - ${price} (Expensive){" "}
        {soldout ? ` is sold out` : `is available`}
      </h1>
    </div>
  );
}

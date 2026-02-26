export default function Fruits() {
  //const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { name: "Apple", price: 1.5, color: "Red", emoji: "🍎" },
    { name: "Banana", price: 2.0, color: "Yellow", emoji: "🍌" },
    { name: "Cherry", price: 3.0, color: "Red", emoji: "🍒" },
    { name: "pineapple", price: 4.0, color: "Yellow", emoji: "🍍" },
  ];
  return (
    <div>
      <h1>Fruits List:</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.emoji} {fruit.name} - ${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

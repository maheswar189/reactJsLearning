import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const fruits = [
    { name: "Apple", price: 1.5, color: "Red", emoji: "🍎", soldout: false },
    { name: "Banana", price: 2.0, color: "Yellow", emoji: "🍌", soldout: true },
    { name: "Cherry", price: 3.0, color: "Red", emoji: "🍒", soldout: false },
    {
      name: "pineapple",
      price: 4.0,
      color: "Yellow",
      emoji: "🍍",
      soldout: true,
    },
  ];
  return (
    <div>
      <h1>Fruits List:</h1>
      <ul>
        {fruits.map((fruit, index) => (
          //   <li key={index}>
          //     {fruit.emoji} {fruit.name} - ${fruit.price}
          //   </li>
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}

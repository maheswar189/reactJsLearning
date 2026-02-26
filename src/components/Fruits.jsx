export default function Fruits() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <div>
      <h1>Fruits List:</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

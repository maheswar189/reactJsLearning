import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function handleClick() {
    setCount(count + incrementBy);
    console.log("Count value is: ", count);
  }
  function decrement() {
    setCount(count - incrementBy);
    console.log("Count value is: ", count);
  }
  function increaseIncrement() {
    console.log("Increment value is: ", incrementBy);
    setIncrementBy(incrementBy + 1);
  }
  function decreaseDecrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Count value is :{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseDecrement}>Decrease Decrement</button>
    </div>
  );
}

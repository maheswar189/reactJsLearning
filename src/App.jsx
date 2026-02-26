import { useState } from "react";
import Hello from "./components/Hello.jsx";
import Greetings from "./components/Greetings.jsx";
import Fruits from "./components/Fruits.jsx";
import ConditionalComponent from "./components/ConditionalComponent.jsx";
function App() {
  const person = {
    name: "Robert",
    age: 30,
    city: "New York",
    emoji: "👋",
    health: "Good",
    seatNumbers: [1, 2, 3, 4, 5],
  };
  return (
    <div>
      {" "}
      Hello world..
      <Hello person={person} />
      <Greetings />
      <Fruits />
      <ConditionalComponent />
    </div>
  );
}

export default App;

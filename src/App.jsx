import { useState } from "react";
import Hello from "./components/Hello.jsx";
import Greetings from "./components/Greetings.jsx";

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
    </div>
  );
}

export default App;

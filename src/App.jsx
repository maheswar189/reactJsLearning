import { useState } from "react";
import Hello from "./components/Hello.jsx";
import Greetings from "./components/Greetings.jsx";

function App() {
  return (
    <div>
      {" "}
      Hello world..
      <Hello name="Robert" message="Welcome to React!" emoji="👋" />
      <Greetings />
    </div>
  );
}

export default App;

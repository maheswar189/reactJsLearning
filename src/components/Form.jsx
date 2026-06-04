import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <h1>FORM:::</h1>
        <input
          //  onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
}

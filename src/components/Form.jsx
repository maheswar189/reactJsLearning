import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //function handleChange(e) {
  // console.log(e.target.value);
  //setName(e.target.value);
  //}

  return (
    <div>
      <form>
        <h1>FORM:::</h1>
        <input
          //  onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          onChange={(e) => {
            setName({ firstName: e.target.value, lastName: "" });
          }}
          type="text"
          value={name.firstName}
        ></input>
        <input
          type="text"
          onChange={(e) => setName({ firstName: "", lastName: e.target.value })}
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}

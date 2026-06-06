import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //function handleChange(e) {
  // console.log(e.target.value);
  //setName(e.target.value);
  //}

  return (
    <div>
      <h1>FORM:::INPUT TYPE FIELDS</h1>
      {name.firstName} ----{name.lastName}
      <form>
        <input
          //  onChange={function demo(e) {
          //   return handleChange(e);
          // }}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
        ></input>
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        ></input>
      </form>
    </div>
  );
}

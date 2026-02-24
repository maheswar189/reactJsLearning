const name = "Rob";

function displayName() {
  return "WOW...!";
}
function Hello(props) {
  console.log(props);
  return (
    <h1>
      Hello {props.message} {props.name}! from Hello.jsx
    </h1>
  );
}

export default Hello;

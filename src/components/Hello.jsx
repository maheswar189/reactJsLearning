const name = "Rob";

function displayName() {
  return "WOW...!";
}
function Hello(props) {
  console.log(props);
  const { name, message } = props;
  return (
    <h1>
      Hello {name} {message} ! from Hello.jsx
    </h1>
  );
}

export default Hello;

export default function Message() {
  function handleClick() {
    console.log("Button clicked! This is the message from Message.jsx");
    alert("Button clicked! This is the message from Message.jsx");
  }

  return <button onClick={handleClick}>Click here to get the message</button>;
}

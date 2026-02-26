export default function ConditionalComponent() {
  let message;
  const display = false;
  if (display) {
    message = <h1>This is the message 1 Conditional Element Component</h1>;
  } else {
    message = <h1>This is the message 2 Conditional Element Component</h1>;
  }
  return message;
}

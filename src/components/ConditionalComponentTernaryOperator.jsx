export default function ConditionalComponentTernaryOperator({}) {
  const isLoggedIn = true; // Change this to false to see the other message

  return isLoggedIn ? (
    <h1>Welcome to React user Ternary operator!</h1>
  ) : (
    <h1>Code every day... Ternary operator..!</h1>
  );
}

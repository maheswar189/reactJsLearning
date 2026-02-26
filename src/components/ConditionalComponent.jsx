import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent({}) {
  const isLoggedIn = false; // Change this to false to see the other message

  if (isLoggedIn) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

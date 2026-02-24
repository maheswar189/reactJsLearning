function Hello({ person }) {
  return (
    <h1>
      Hello {person.name} {person.message} {person.emoji} from Hello.jsx with
      health: {person.health}
      seatNumbers: {person.seatNumbers.join(", ")}
    </h1>
  );
}

export default Hello;

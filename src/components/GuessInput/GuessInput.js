import React from "react";

function GuessInput({ trackNewGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        trackNewGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength={1}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="Please enter 5 letters"
        onChange={(event) => {
          const value = event.target.value;
          const upperValue = value.toUpperCase();
          setGuess(upperValue);
        }}
      />
    </form>
  );
}

export default GuessInput;

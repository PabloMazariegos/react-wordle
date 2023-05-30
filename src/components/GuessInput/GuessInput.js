import React from "react";

function GuessInput({guess, setGuess}) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess('');
        console.log({guess});
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
          const data = event.target.value;
          const upperCaseData = data.toUpperCase();
          setGuess(upperCaseData);
        }}
      />
    </form>
  );
}

export default GuessInput;

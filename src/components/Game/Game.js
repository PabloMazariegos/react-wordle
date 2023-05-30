import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResult] = React.useState([]);

  const trackNewGuess = (guess) => {
    const newGuess = {
      label: guess,
      key: crypto.randomUUID(),
    };

    const guesses = [...guessResults, newGuess];

    setGuessResult(guesses);

    console.log({ newGuess });
    console.log({guesses})
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput trackNewGuess={trackNewGuess} />
    </>
  );
}

export default Game;

import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResult] = React.useState([]);

  const trackNewGuess = (guess) => {
    if(guessResults.length === NUM_OF_GUESSES_ALLOWED){
      return;
    }

    const newGuess = {
      label: guess,
      key: crypto.randomUUID(),
    };

    const guesses = [...guessResults, newGuess];

    setGuessResult(guesses);
  };

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput trackNewGuess={trackNewGuess} />
    </>
  );
}

export default Game;

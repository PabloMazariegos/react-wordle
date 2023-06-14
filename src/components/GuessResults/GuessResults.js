import React from "react";
import GuessItem from "../GuessItem/GuessItem";

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

const guesItemRange = range(NUM_OF_GUESSES_ALLOWED);

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {
        guesItemRange.map(item => {
          return (
            <GuessItem key={item} guessResult={guessResults[item]} /> 
          )
        })
        
      }
    </div>
  );
}

export default GuessResults;

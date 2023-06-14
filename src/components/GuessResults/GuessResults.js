import React from "react";
import GuessItem from "../GuessItem/GuessItem";

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'

const guesItemRange = range(NUM_OF_GUESSES_ALLOWED);

function GuessResults({ guessResults, answer }) {
  
  const getCheckedGuess = (guess) => {
    return checkGuess(guess, answer)
  }

  return (
    <div className="guess-results">
      {
        guesItemRange.map(item => {
          return (
            <p className="guess" key={item}>
              <GuessItem key={item} guess={getCheckedGuess(guessResults[item])} /> 
            </p>
          )
        })
        
      }
    </div>
  );
}

export default GuessResults;

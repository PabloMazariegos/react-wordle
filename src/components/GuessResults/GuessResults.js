import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults && guessResults.length === 0
        ? ""
        : guessResults.map((guess) => (
            <p className="guess" key={guess.key}>
              {guess.label}
            </p>
          ))}
    </div>
  );
}

export default GuessResults;

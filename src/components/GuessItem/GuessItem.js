import React from "react";
import { range } from "../../utils";

const getCells = (guessResult) => {
    if(!guessResult){
        const defaultRange = range(5);
        return defaultRange.map(() => (
            <span className="cell" key={crypto.randomUUID()}></span>
        ))
    }

    let lettersCells = [];
    const guessResultValue = guessResult.label;

    for(let i = 0; i < guessResultValue.length; i++){
        lettersCells.push(
            <span className="cell" key={crypto.randomUUID()}>{guessResultValue[i]}</span>
        )
    }

    return lettersCells
}

function GuessItem({ guessResult }) {
    const cells = getCells(guessResult)

    return (
    <>
      <p className="guess">{ cells.map(cell => cell) } </p>
    </>
  );
}

export default GuessItem;

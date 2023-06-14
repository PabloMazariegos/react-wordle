import React from "react";
import { range } from "../../utils";


const getRange = () => {
    const defaultRange = range(5);
    return defaultRange.map(() => (
        <span className="cell" key={crypto.randomUUID()}></span>
    ))
}

const statusClass = {
    'misplaced': 'cell misplaced',
    'correct': 'cell correct',
    'incorrect': 'cell incorrect'
}

const createCells = (guess) => {
    if(!guess){
        return getRange()
    }

    
    return guess.map(guessValidation => {

        const className = statusClass[guessValidation.status]

        return (
            <span className={className} key={crypto.randomUUID()}>{guessValidation.letter}</span>
        )
    });
}

function GuessItem({ guess }) {
    console.log(createCells(guess))
    let cells = createCells(guess)

    return (
    <>
      { cells.map(cell => cell) }
    </>
  );
}

export default GuessItem;

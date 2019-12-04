import React, { useState } from 'react'
import Board from './Board'
import Scoreboard from './Scoreboard';
function Game() {
    let [player1Score, setScoreP1] = useState(0)
    let [player2Score, setScoreP2] = useState(0)
    let [board, setBoard] = useState([[4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4]])
    let [playerTurn, changeTurn] = useState(1);

    function handlePocketClick(id) {
        let tempBoard = [...board];
        let row = Number(id.substring(0, 1));
        if (playerTurn === row) {
            const activePlayer = row;
            let index = Number(id.substring(id.indexOf('-') + 1));
            const pocketValue = tempBoard[row][index];
            const removedForScore = Math.floor((index + pocketValue + 6) / 12);
            let scoreValue = removedForScore;
            const forPlayArea = pocketValue - removedForScore;
            updateBoard(tempBoard, forPlayArea, index, row)
            updateScore(activePlayer, scoreValue)
            updatePlayerTurn(index, pocketValue, row)

        }
    }
    function updatePlayerTurn(index, pocketValue, row) {
        if ((pocketValue + index + 6) % 12 !== 0) {
            changeTurn((row + 1) % 2);
        }
    }
    function updateBoard(tempBoard, forPlayArea, index, row) {
        tempBoard[row][index] = 0;
        for (let i = 0; i < forPlayArea; i++) {
            index += 1;
            if (index % 6 === 0) {
                index = 0;
                row = (row + 1) % 2;
            }
            if ((i === forPlayArea - 1) && (tempBoard[row][index] === 0 && row == activePlayer)) {
                const oppositeRow = (row + 1) % 2;
                const valueToSteal = tempBoard[oppositeRow][5 - index];
                scoreValue += valueToSteal + 1;
                tempBoard[oppositeRow][5 - index] = 0;
                tempBoard[row][index] = 0;
            } else {
                tempBoard[row][index] = tempBoard[row][index] + 1;
            }
        }
        setBoard(tempBoard);
    }
    function updateScore(activePlayer, scoreValue) {
        if (activePlayer === 0) {
            setScoreP2(player2Score + scoreValue);
        } else {
            setScoreP1(player1Score + scoreValue);
        }
    }
    return (
        <div>
            <Board gameBoard={board} player1Score={player1Score} player2Score={player2Score} onPocketClick={handlePocketClick} />
            <Scoreboard player1Score={player1Score} player2Score={player2Score} />
        </div>
    )
}
export default Game;
import React, {useState} from 'react'
import Board from './Board'
import Scoreboard from './Scoreboard';
function Game(){
    let [player1Score, setScoreP1] = useState(0)
    let [player2Score, setScoreP2] = useState(0)
    let [board, setBoard] = useState([[4,4,4,4],[4,4,4,4]])
    
    function handlePocketClick(id){
        console.log(id);
        let row = Number(id.substring(0,1));
        const activePlayer = row;
        let index = Number(id.substring(id.indexOf('-')+1));
        const pocketValue = board[row][index];
        const removedForScore = Math.floor(pocketValue/4);
        const addToBothScores = Math.floor(removedForScore/2);
        const addToActivePlayer = removedForScore % 2;
        const forPlayArea = pocketValue - removedForScore;
        console.log(index);
        console.log(addToActivePlayer);
        console.log(removedForScore);
        board[row][index] = 0;
        for(let i = 0; i < forPlayArea; i++){
            index += 1;
            if(index % 4 === 0){
                index = 0;
                row = (row +1) % 2;
            }
            board[row][index] = board[row][index] + 1;
        }
        if(activePlayer === 0){
            setScoreP1(player1Score + addToBothScores);
            setScoreP2(player2Score + addToBothScores + addToActivePlayer);
        } else {
            setScoreP1(player1Score + addToBothScores + addToActivePlayer);
            setScoreP2(player2Score + addToBothScores);
        }
        setBoard(board);
        console.log(board.slice());

    }
    return (
        <div>
            <Board gameBoard={board} player1Score={player1Score} player2Score={player2Score} onPocketClick={handlePocketClick}/>
            <Scoreboard player1Score={player1Score} player2Score={player2Score}/>
        </div>
    )
}
export default Game;
import React, {useState} from 'react'
import Board from './Board'
import Scoreboard from './Scoreboard';
function Game(){
    let [player1Score, setScoreP1] = useState(0)
    let [player2Score, setScoreP2] = useState(0)
    let [board, setBoard] = useState([[4,4,4,4,4,4],[4,4,4,4,4,4]])
    
    function handlePocketClick(id){
        let tempBoard = [...board];
        console.log(id);
        let row = Number(id.substring(0,1));
        const activePlayer = row;
        console.log(activePlayer);
        let index = Number(id.substring(id.indexOf('-')+1));
        const pocketValue = tempBoard[row][index];
        const removedForScore = Math.floor((index+pocketValue+6)/12);
        const addToActivePlayer = removedForScore; 
        console.log("to active only", addToActivePlayer);
   
        console.log("total removed", removedForScore);
        const forPlayArea = pocketValue - removedForScore;
        tempBoard[row][index] = 0;
        for(let i = 0; i < forPlayArea; i++){
            index += 1;
            if(index % 6 === 0){
                index = 0;
                row = (row +1) % 2;
            }
            tempBoard[row][index] = tempBoard[row][index] + 1;
        }
        if(activePlayer === 0){
            setScoreP2(player2Score +  addToActivePlayer);
        } else {
            setScoreP1(player1Score +  addToActivePlayer);
        }
        setBoard(tempBoard);
        console.log(board.slice());
        console.log("p1", player1Score);
        console.log("p2", player2Score);
    }
    return (
        <div>
            <Board gameBoard={board} player1Score={player1Score} player2Score={player2Score} onPocketClick={handlePocketClick}/>
            <Scoreboard player1Score={player1Score} player2Score={player2Score}/>
        </div>
    )
}
export default Game;
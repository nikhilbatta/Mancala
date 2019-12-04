import React, {useState} from 'react'
import Board from './Board'
import Scoreboard from './Scoreboard';
function Game(){
    const [player1Score, setScoreP1] = useState(0)
    const [player2Score, setScoreP2] = useState(0)
    const [board, setBoard] = useState([[4,4,4,4],[4,4,4,4]])
    return (
        <div>
            <Board gameBoard={board} player1Score={player1Score} player2Score={player2Score}/>
            <Scoreboard player1Score={player1Score} player2Score={player2Score}/>
        </div>
    )
}
export default Game;
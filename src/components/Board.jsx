import React from 'react'
import Pocket from './Pocket';

function Board(){
    var gameBoard = Array(2).fill(new Array(4).fill(4))
    console.log(gameBoard)
    var inlineStyle = {
        display: 'inline-block',
        height: '300px'
    }
    function makePlayRow(rowArray, rowIndex){
        return(
            <div>
                {rowArray.map((content, index) =><Pocket key={`${rowIndex}-${index}`}/>)}
            </div>
        )
    }
    return (
        <div style={inlineStyle}>
            <div id='player1-score' style={inlineStyle}>
                <Pocket />
            </div>
            <div id='play-area' style={inlineStyle}>
                {gameBoard.map((playerSideArray, index) => {
                    return(makePlayRow(playerSideArray, index));
                })}
            </div>
            <div id='player2-score' style={inlineStyle}>
                <Pocket />
            </div>
        </div>
    )
}
export default Board;
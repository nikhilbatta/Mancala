import React from 'react'
import Pocket from './Pocket';

function Board(props){
    var inlineStyle = {
        display: 'inline-block',
        height: '300px',
        verticalAlign: 'top'
    }
    function makePlayRow(rowArray, rowIndex){
        return(
            <div>
                {rowArray.map((content, index) =><Pocket count={content} key={`${rowIndex}-${index}`}/>)}
            </div>
        )
    }
    return (
        <div style={inlineStyle}>
            <div id='player1-score' style={inlineStyle}>
                <Pocket count={props.player1Score}/>
            </div>
            <div id='play-area' style={inlineStyle}>
                {props.gameBoard.map((playerSideArray, index) => {
                    return(makePlayRow(playerSideArray, index));
                })}
            </div>
            <div id='player2-score' style={inlineStyle} >
                <Pocket count={props.player2Score}/>
            </div>
        </div>
    )
}
export default Board;
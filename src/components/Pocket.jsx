import React from 'react';

function Pocket(props){
    var inlineStyle = {
        display: 'inline-block',
        border: '1px solid black',
        minHeight: '150px',
        width: '150px',
        height: 'inherit'
    }
    return (
        <div style={inlineStyle}>
            {props.count}
        </div>
    )
}

export default Pocket;
import React from 'react';

const Child = (props) => {
    return(
       <button onClick = {props.onclick}>{props.counter}</button>
    );
}

export default Child;
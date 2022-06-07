import React from 'react';

const RandomNumber = (props) => {
    const num = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    console.log("hi");

    return (
        <p className='card-text'>Random number: {num} </p>
    );
}
export default RandomNumber;
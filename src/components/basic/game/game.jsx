import React, { useState } from 'react';
import GameData from './data';
import GameTip from './tip';

const Game = (props) => {
    const [number, setNumber] = useState(0);
    const [tip, setTip] = useState('Guess the number between ' + props.min + ' and ' + props.max);

    let min = props.min;
    let max = props.max;

    const getRandNum = () => Math.floor(Math.random() * (max - min + 1) + min);

    function startGame() {
        setNumber(getRandNum());
    }

    function verify(value) {
        if (value == number)
            setTip('You\'ve on!');
        else
            if (value > number)
                setTip('A bit lower');
            else
                setTip('A bit higher');
    }

    function onGiveUp() {
        setTip('The number was: ' + number);
    }

    return (
        <div>
            <GameData onStart={startGame} onVerify={verify} onGiveUp={onGiveUp}></GameData>
            <GameTip onGiveUp={onGiveUp} tip={tip}></GameTip>
        </div>
    );

}
export default Game;
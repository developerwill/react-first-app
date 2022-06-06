import React, { useState } from 'react';

const GameData = (props) => {
    const [value, setValue] = useState(0);

    return (
        <div className='text-center'>
            <button onClick={e => props.onStart()} className='btn btn-success m-2'>Start</button>
            <button onClick={e => props.onVerify(value)} className='btn btn-primary m-2'>Verify</button>
            <button onClick={e => props.onGiveUp(value)} className='btn btn-danger m-2'>Eye Give up!</button>
            <input onChange={e => setValue(e.target.value)} name='num' value={value} className='form-control mt-2'></input>
        </div>
    );
}
export default GameData;
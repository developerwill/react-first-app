import React, { useState } from 'react';

const Input = (props) => {
    const [value, setValue] = useState('Initial');

    function updateValue(e) {
        setValue(e.target.value);
    }

    return (
        <div>
            <p>{value}</p>
            <input className="form-control" value={value} type="text" onChange={updateValue}></input>
        </div>
    );
}
export default Input;
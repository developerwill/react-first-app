import React, { useState } from 'react';

const Event = (props) => {
    const [name, setName] = useState('José Oliveira');

    //let name = "???";

    function changeName(newName) {
        //name = newName;
        setName(newName);
    }

    return (
        <div>
            <p>Name: {name} </p>
            <button className='btn btn-primary' onClick={e => changeName("Wilson")}>Change Name</button>
        </div>
    );
}
export default Event;
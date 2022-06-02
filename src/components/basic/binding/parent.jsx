import React, { useState } from 'react';
import Child from './child';

const Parent = (props) => {

    const [name, setName] = useState('Wilson Gomes');
    const [age, setAge] = useState(30);

    /* let name = "José";
    let age = 25; */

    function infoParent(newName, newAge) {
        /* name = newName;
        age = newAge; */
        setName(newName);
        setAge(newAge);
    }

    return (
        <div>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <Child clickedUpon={infoParent}></Child>
        </div>
    );
}
export default Parent;
import React from 'react';

const Child = (props) => {
    return (
        <div>
            <button className='btn btn-danger' onClick={e => props.clickedUpon("Joana", 40)}>Change Data</button>
        </div>
    );
}
export default Child;
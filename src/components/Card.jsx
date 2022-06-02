import React from 'react';

const Card = (props) => {
    return (
        <div className={`card ${props.className} going?`}>
            <div className='card-body'>
                <h5 className="card-title">{props.title}</h5>
                {props.children}
            </div>
        </div>
    );
}
export default Card;
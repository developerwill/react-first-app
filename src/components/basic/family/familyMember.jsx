import React from 'react';

const FamilyMember = (props) => {
    return (
        <p>Name: {props.name + ' ' + props.surname} </p>
    );
}
export default FamilyMember;
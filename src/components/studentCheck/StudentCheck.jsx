import React from 'react';

const StudentCheck = (props) => {

    return (
        <p>{props.name} {props.grade >= 9.5 ? 'was approved!' : 'wasn\'t approved :('}</p>
    );
}
export default StudentCheck;
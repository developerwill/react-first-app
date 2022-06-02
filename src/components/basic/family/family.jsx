import React from 'react';
import FamilyMember from './familyMember';

const Family = (props) => {
    console.log(props.surname);
    return (
        <div>
            <FamilyMember name="Hugo" surname={props.surname} />
            <FamilyMember name="Ana" surname={props.surname} />
            <FamilyMember name="Santiago" surname={props.surname} />
        </div>
    );
}
export default Family;
import React from 'react';
import students from '../../../data/students';

const StudentsList = (props) => {

    const list = students.map((student, index) => {
        return (
            <li className="list-group-item" key={index}>
                {student.id} - {student.nome} - {student.nota}
            </li>
        )
    });

    return (
        <ol className="list-group list-group-numbered">
            {list}
        </ol>
    );
}
export default StudentsList;
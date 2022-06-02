import { cloneElement } from 'react';

const Family = (props) => {
    return (
        props.children.map(element => {
            return cloneElement(element, props);
        })
    );
}
export default Family;
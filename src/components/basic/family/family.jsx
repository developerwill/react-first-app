import { cloneElement } from 'react';

const Family = (props) => {
    return (
        props.children.map((element, index) => {
            return cloneElement(element, { ...props, key: index });
        })
    );
}
export default Family;
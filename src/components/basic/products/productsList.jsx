import React from 'react';
import products from '../../../data/products';

const ProductsList = (props) => {

    const list = products.map((product, index) => {
        return (
            <li className="list-group-item" key={index}>
                {product.reference} - {product.price}
            </li>
        );
    });

    return (
        <ol className="list-group list-group-numbered">
            {list}
        </ol>
    );
}
export default ProductsList;
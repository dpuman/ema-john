import React from 'react';

import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="pic" />
            </div>
            <div className="product-details">
                <h3 className='name' >{name}</h3>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="card-button" onClick={props.handleAddProduct}>add to card</button>
            </div>
        </div>
    );
};

export default Product;
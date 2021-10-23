import React from 'react';
import { Link } from 'react-router-dom';
const CartItem = (props) => {

    const { img, name, seller, price, stock, key, quantity } = props.product



    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="pic" />
            </div>
            <div className="product-details">
                <h3 className='name' ><Link to={"/product/" + key}>{name}</Link></h3>
                <h3>Quantity: {quantity}</h3>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="card-button" onClick={() => { props.removeProduct(key) }} >Remove Item</button>

            </div>
        </div >
    );
};

export default CartItem;
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="pic" />
            </div>
            <div className="product-details">
                <h3 className='name' ><Link to={"/product/" + key}>{name}</Link></h3>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                {props.addToCardButton && <button className="card-button" onClick={() => props.handleAddProduct(props.product)}><i className="fas fa-shopping-cart"></i> add to card</button>}

            </div>
        </div >
    );
};

export default Product;
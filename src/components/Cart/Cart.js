import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    let shippingCost = 0
    if (total > 100) {
        shippingCost = 0;
    }
    else if (total > 50) {
        shippingCost = 15;

    }
    else if (total > 25) {
        shippingCost = 8;
    }
    const vat = total / 10

    const fixNumber = (number) => {
        let prefix = number.toFixed(2)
        return Number(prefix)
    }

    const grandTotal = total + shippingCost + vat
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items added:{cart.length} </h4>
            <p>Product Price: {(total).toFixed(2)}</p>
            <p>Vat + Tax : {fixNumber(vat)}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p>Total: {fixNumber(grandTotal)}</p>
            <br />
            <Link to='/review'>
                <button className="card-button"><i className="fas fa-shopping-cart"></i> Review</button></Link>
        </div>
    );
};

export default Cart;
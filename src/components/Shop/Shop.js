import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h4>Items Added" {cart.length}</h4>
            </div>

        </div>
    );
}

export default Shop;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handlePlaceOrder = () => {
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();
        history.push('/shipment')

    }

    const removeProduct = (productKey) => {
        console.log('Remove', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    useEffect(() => {
        const savedCart = getDatabaseCart();

        const productKeys = Object.keys(savedCart)
        // console.log(productKeys);

        const cartProducts = productKeys.map(pdk => {
            const product = fakeData.find(pd => pd.key === pdk);
            product.quantity = savedCart[pdk]

            return product;
        })
        // console.log(cartProducts);
        setCart(cartProducts)


    }, [])

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt='thankyou' ></img>
    }


    return (
        <div className="container">

            <div className="product-container">

                {
                    cart.map(pd => <CartItem key={pd.key} removeProduct={removeProduct} product={pd}></CartItem>)
                }
                {thankyou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="card-button"><i className="fas fa-shopping-cart"></i>Proceed Checkout</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;
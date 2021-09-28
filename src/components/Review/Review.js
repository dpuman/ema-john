import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartItem from '../CartItem/CartItem';

const Review = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();

        const productKeys = Object.keys(savedCart)
        console.log(productKeys);

        const cartProducts = productKeys.map(pdk => {
            const product = fakeData.find(pd => pd.key === pdk);
            product.quantity = savedCart[pdk]

            return product;
        })
        console.log(cartProducts);
        setCart(cartProducts)


    }, [])


    return (
        <div>
            <h1>Review Page</h1>


            {
                cart.map(pd => <CartItem product={pd}></CartItem>)
            }
        </div>
    );
};

export default Review;
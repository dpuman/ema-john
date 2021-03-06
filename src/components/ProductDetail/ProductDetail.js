import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey)

    console.log(product);


    return (
        <div>
            <h1>{productKey} Product details Coming soon</h1>

            <Product addToCardButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
import React from 'react';
import { useParams } from 'react-router';
import Product from '../components/Product/Product';
import fakeData from '../fakeData';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1>{productKey} is Coming Soon........</h1>
            <Product showAddToCart = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
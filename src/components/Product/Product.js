import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="single-product">

            <div className="image">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className ="product-name"> <Link to = {'/product/' + key}> {name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>

                <p><b> ${price} </b></p>

                <p><small>Only <strong>{stock}</strong> left in stock -
                    order soon</small></p>
                <br/>
                {props.showAddToCart && <button className = 'addToCartBtn' 
                onClick = {() => props.handleAddProduct(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} />   add to cart</button>}
            </div>

        </div>
    );
};

export default Product;
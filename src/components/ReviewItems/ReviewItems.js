import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product;

    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '20px',
        paddingBottom: '10px',
    }
    return (
        <div style = {reviewItemStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p> <small>Unit Price: ${price}</small></p>
            <br />
            <button 
                className = "addToCartBtn"
                onClick = {()=> props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItems;
import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        
    }
    let shipping = 0;
    if (total> 100){
        shipping = 0
    }
    else if (total>50){
        shipping = 20.99
    }
    else if(total > 30){
        shipping = 11.99
    }
    else if(total > 0){
        shipping = 4.99
    }
    const formatNumber = num => {
        const precession = num.toFixed(2);
        return Number(precession);
    }
     const tax = (total/10)
    // const productFixed = total.toFixed(2)
     const grandTotal = total+shipping+tax;
    
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping cost: ${shipping} </p>
            <p>Tax: ${formatNumber(tax)}</p>
            <p>Total Price: ${formatNumber(grandTotal)}</p>
            <br />
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;
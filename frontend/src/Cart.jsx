import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.user.items);

    return (
        <>
            {cartItems.length > 0 ? (
                <div className="cart">
                    <h2>Cart</h2>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.product_name}
                                <img
                                    src={
                                        item.image_path
                                            ? `http://localhost:3000/${item.image_path}`
                                            : '/default-image.jpg'
                                    }
                                    style={{ width: '100px' }}
                                    alt="Product"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>Nothing in cart</div>
            )}
        </>
    );
};

export default Cart;

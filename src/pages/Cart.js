import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Checkout from '../components/Checkout';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <h1>Cart</h1>
      <div className='cart_grid'>
        <div className='flex-wrapper'>
          {cartItems.length === 0 ? (
            <h2 style={{ marginTop: '2rem' }}>Cart is empty</h2>
          ) : (
            cartItems.map((b) => (
              <Card
                key={b.id}
                id={b.id}
                alt={b.alt}
                title={b.title}
                author={b.author ? b.author : ''}
                category={b.category ? b.category : ''}
                link={b.link}
                disable_btn
              />
            ))
          )}
        </div>
        <div className='checkout'>
          <Checkout />
        </div>
      </div>
    </>
  );
};

export default Cart;

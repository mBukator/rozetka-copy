import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css'
export default function EmptyCart() {
  return (
    <div className="empty-cart__container">
      <div className="empty-cart__wrapper">
          <h1 className='empty-cart__title'>Your Cart is Empty</h1>
          <Link to="/" className='empty-cart__link'>Comeback for shopping...</Link>
      </div>
    </div>
  );
}

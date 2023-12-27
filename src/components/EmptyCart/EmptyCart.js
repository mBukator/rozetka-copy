import React from 'react';
import { Link } from 'react-router-dom';
import ModalCart from '../../img/modal-cart-dummy.svg';
import './EmptyCart.css';
export default function EmptyCart() {
  return (
    <div className="empty-cart__container">
      <div className="empty-cart__wrapper">
        <img src={ModalCart} alt="Empty Cart" className="empty-cart__image" />
        <h1 className="empty-cart__title">Кошик порожній</h1>
        <p>Але це ніколи не пізно виправити :)</p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/actions/index';

import { FaTrash } from "react-icons/fa";

import EmptyFolder from '../../components/EmptyFolder/EmptyFolder';

import './Cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleRemoveProduct = (item) => {
    dispatch(deleteProduct(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="product" key={cartItem.id}>
        <div className="product__view">
          <img className="cart-product__img" src={cartItem.image} alt="" />
          <p className="product__title">{cartItem.title}</p>
        </div>
        <div className="product__info">
          <span className="product__price">{cartItem.price}</span>
          <button className="product__remove" onClick={() => handleRemoveProduct(cartItem)}>
            <FaTrash /> Видалити
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cart__menu">
      {state.length === 0 && <EmptyFolder />}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;

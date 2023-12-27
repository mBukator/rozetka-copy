import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/actions/index';

import { FaTrash } from 'react-icons/fa';

import EmptyCart from '../../components/EmptyCart/EmptyCart';

import { RxCross1 } from 'react-icons/rx';

import './CartModal.css';

const CartModal = ({ open, onClose }) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  if (!open) return null;

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
    <div className="overlay" onClick={onClose}>
      <div
        className="loginModalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="modal-top-part">
          <h2>Кошик</h2>
          <p className="closeBtn">
            <RxCross1 onClick={onClose} size={20} />
          </p>
        </div>
        <div className="cart__menu">
          {state.length === 0 && <EmptyCart />}
          {state.length !== 0 && state.map(cartItems)}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

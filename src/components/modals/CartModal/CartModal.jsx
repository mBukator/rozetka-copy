import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/actions'; 

import { FaTrash } from 'react-icons/fa';

import EmptyCart from '../../EmptyCart/EmptyCart';

import { RxCross1 } from 'react-icons/rx';

import styles from './CartModal.module.css';

const CartModal = ({ open, onClose }) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  if (!open) return null;

  const handleRemoveProduct = (item) => {
    dispatch(deleteProduct(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className={styles.product} key={cartItem.id}>
        <div className={styles.product__view}>
          <img className={styles.product__img} src={cartItem.image} alt="" />
          <p className={styles.product__title}>{cartItem.title}</p>
        </div>
        <div className="product__info">
          <span className={styles.product__price}>{cartItem.price}</span>
          <button className={styles.product__remove} onClick={() => handleRemoveProduct(cartItem)}>
            <FaTrash /> Видалити
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={styles.panel}>
          <h2>Кошик</h2>
          <p className={styles.closeBtn}>
            <RxCross1 onClick={onClose} size={20} />
          </p>
        </div>
        <div className={styles.cart__menu}>
          {state.length === 0 && <EmptyCart />}
          {state.length !== 0 && state.map(cartItems)}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

import React from 'react';
import { Link } from 'react-router-dom';
import ModalCart from '../../img/modal-cart-dummy.svg';

import styles from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={ModalCart} alt="Empty Cart" className="empty-cart__image" />
        <h1 className={styles.title}>Кошик порожній</h1>
        <p>Але це ніколи не пізно виправити :)</p>
      </div>
    </div>
  );
};

export default EmptyCart;

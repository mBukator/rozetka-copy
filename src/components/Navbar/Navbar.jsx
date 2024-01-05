import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../../redux/actions';

import LoginModal from '../modals/LoginModal/LoginModal';
import CartModal from '../modals/CartModal/CartModal';

import logo from '../../img/logo.svg';
import logoAlt from '../../img/logo-alt.svg';
import rekl from '../../img/369638665.jpg';

import styles from './Navbar.module.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.handleChangeCurrency.currency);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch(changeCurrency(newCurrency));
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header__ad}>
          <a href="index.html" className="ad__link">
            <img src={rekl} alt="rekl" className={styles.ad__img} />
          </a>
        </div>

        <div className={styles.header__main}>
          <div className={styles.main__wrapper}>
            <div onClick={handleClick} className={styles.main__menu}>
              <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <div className={styles.main__logo_catalog}>
              <div className={styles.main__logo}>
                <Link to="/">
                  <img src={logo} alt="Rozetka" />
                </Link>
              </div>
              <div className={styles.alt_logo}>
                <Link to="/">
                  <img src={logoAlt} alt="Rozetka" />
                </Link>
              </div>
              <button className={styles.button}>
                <div className="button__content">
                  <i className="fa-solid fa-folder-open button__icon" />
                  <span className={styles.button__title}>Каталог</span>
                </div>
              </button>
            </div>

            <div className={styles.search}>
              <i className="fa-solid fa-magnifying-glass search__icon" />
              <input type="text" placeholder="Пошук" name="search" className={styles.input} />
            </div>

            <div className={styles.wrapper}>
              <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
              </select>
              <div className={styles.user} onClick={() => setOpenLoginModal(true)}>
                <i className="fa-sharp fa-solid fa-user user__icon"></i>
              </div>
              <div className={styles.cart}>
                <div onClick={() => setOpenCartModal(true)}>
                  <i className="fa-solid fa-cart-shopping cart__icon" />
                  <span className={styles.cart__count}>{state.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
      <CartModal open={openCartModal} onClose={() => setOpenCartModal(false)} />
    </>
  );
};

export default Navbar;

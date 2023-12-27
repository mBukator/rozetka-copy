import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import logoAlt from '../../img/logo-alt.svg';
import rekl from '../../img/369638665.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../LoginModal/LoginModal';
import CartModal from '../CartModal/CartModal';
import { changeCurrency } from '../../redux/actions';

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
      <nav className="header">
        <div className="header__ad">
          <a href="index.html" className="ad__link">
            <img src={rekl} alt="rekl" className="ad__img" />
          </a>
        </div>

        <div className="header__main">
          <div className="main__wrapper">
            <div onClick={handleClick} className="main__menu">
              <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <div className="main__logo-catalog">
              <div className="main__logo">
                <Link to="/">
                  <img src={logo} alt="Rozetka" />
                </Link>
              </div>
              <div className="main__alt-logo">
                <Link to="/">
                  <img src={logoAlt} alt="Rozetka" />
                </Link>
              </div>
              <button className="catalog__button">
                <div className="button__content">
                  <i className="fa-solid fa-folder-open button__icon" />
                  <span className="button__title">Каталог</span>
                </div>
              </button>
            </div>

            <div className="main__search">
              <i className="fa-solid fa-magnifying-glass search__icon" />
              <input type="text" placeholder="Пошук" name="search" className="search__input" />
            </div>

            <div className="user-cart__wrapper">
              <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
              </select>
              <div className="user" onClick={() => setOpenLoginModal(true)}>
                <i className="fa-sharp fa-solid fa-user user__icon"></i>
              </div>
              <div className="cart">
                <div onClick={() => setOpenCartModal(true)}>
                  <i className="fa-solid fa-cart-shopping cart__icon" />
                  <span className="cart__count">{state.length}</span>
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

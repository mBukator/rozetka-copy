import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import logoAlt from '../../img/logo-alt.svg';
import rekl from '../../img/369638665.jpg';
import './Navbar.css';

const Navbar = ({setShow, size}) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
      <nav className='header'>
        <div className="header__ad">
          <a href='index.html' className='ad__link'>
            <img src={rekl} alt='rekl' className='ad__img'/>
          </a>
        </div>

        <div className="header__main">
          <div className="main__wrapper">
            <div onClick={handleClick} className='main__menu'>
              <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className="main__logo-catalog">
              <div className="main__logo" onClick={() => setShow(true)}>
                <a href="index.html">
                  <img src={logo} alt="Rozetka" />
                </a>
              </div>
              <div className="main__alt-logo">
                <a href="index.html">
                  <img src={logoAlt} alt="Rozetka" />
                </a>
              </div>

              <button className="catalog__button">
                <div className="button__content">
                  <i className="fa-solid fa-folder-open button__icon" />
                  <span className='button__title'>Каталог</span>
                </div>
              </button>
            </div>

            <div className="main__search">
              <i className="fa-solid fa-magnifying-glass search__icon" />
              <input type="text" placeholder="Пошук" name="search" className="search__input" />
            </div>

            <div className='user-cart__wrapper'>
              <div className="user">
                <i className="fa-sharp fa-solid fa-user user__icon"></i>
              </div>
              <div className="cart">
                <i className="fa-solid fa-cart-shopping cart__icon" onClick={() => setShow(false)}></i>
                <span className='cart__count'>{size}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

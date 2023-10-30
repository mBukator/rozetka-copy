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
      <nav>
        <div className="header-top">
          <div className="rekl">
            <a href='index.html'>
              <img src={rekl} alt='rekl'/>
            </a>
          </div>
        </div>

        <div className="header-bottom">
          <div className="hb-wrap">
            <div id="menu" onClick={handleClick}>
              <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
              </i>
            </div>
            <div className="logo-catalog">
              <div className="logo" onClick={() => setShow(true)}>
                <a href="index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div id="mobile" className="logo-alt">
                <a href="index.html">
                  <img src={logoAlt} alt="" />
                </a>
              </div>

              <button className="catalog-button">
                <div className="btn-content">
                  <i className="fa-solid fa-folder-open" />
                  <span>Каталог</span>
                </div>
              </button>
            </div>

            <div className="search">
              <i className="fa-solid fa-magnifying-glass" />
              <input type="text" placeholder="Пошук" name="search" className="search-input" />
            </div>

            <div className="cart">
              <i className="fa-sharp fa-solid fa-user"></i>
              <i className="fa-solid fa-cart-shopping" onClick={() => setShow(false)}></i>
              <span className='cart-count'>{size}</span>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

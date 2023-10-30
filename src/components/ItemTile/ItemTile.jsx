import React from 'react';
import './ItemTile.css';
import Cart from '../../img/icons/icon-shopping-cart.png'


const ItemTile = ({item, handleAddToCart}) => {
  const { title, price, salesPrice, img } = item;
  return (
    <div className="tile">
      <div className="tile__inner">
        <div className='shopping-cart'>
          <button onClick={() => handleAddToCart(item)}>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
        <a className='tovar' href="#">
          <img src={img} alt="" />
        </a>
        <a className="tile__title" href="#">
          {title}
        </a>
        <div className="prices">
          <div className="price__old">
            <span>{price} ₴</span>
          </div>
          <div className="price__new">
            <span>{salesPrice} ₴</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemTile;

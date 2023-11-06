import React from 'react';
import './Body.css';
import './MoreGoods.css';
import goods from '../../util/data';
import categories from '../../util/categories';
import ItemCard from '../ItemCard/ItemCard';
import CategoryItem from '../CategoryItem/CategoryItem';

import Information from '../../img/categories-icon/icon-information.png';
import Message from '../../img/categories-icon/icon-paper-plane.png';
import Delivery from '../../img/categories-icon/icon-delivery.png';

const Body = ({ handleAddToCart }) => {
  return (
    <div className="layout_with_sidebar">
      <aside className="sidebar desktop-only">
        <div className="menu-categories">
          <ul>
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category}  />
            ))}
          </ul>
        </div>

        <div className="dovidk-centr">
          <a href="index.html">
            <span>
              <img src={Information} alt="icon" />
            </span>
            Довідковий центр
          </a>
        </div>
        <div className="chat-rozetka">
          <a href="index.html">
            <span>
              <img src={Message} alt="icon" />
            </span>
            Чат з ROZETKA
          </a>
        </div>
        <div className="delivery-point">
          <a href="index.html">
            <span>
              <img src={Delivery} alt="icon" />
            </span>
            Точки видачі Rozetka
          </a>
        </div>
      </aside>

      <main className="main-content">
        <div className="goods">
          <div className="more-goods">
            <div className="goods-container">
              <h2>Більше товарів для вибору</h2>
              <section className="more-goods__grid">
                {goods.map((item) => (
                  <ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
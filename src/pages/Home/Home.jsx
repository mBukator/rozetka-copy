import React, { useEffect } from 'react';

// CUSTOM HOOKS IMPORTS
import useFetch from '../../hooks/useFetch';

// AXIOS
import axios from 'axios';
import { getAllProducts } from '../../API';

// COMPONENTS
import ItemCard from '../../components/ItemCard/ItemCard';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Skeleton from './Skeleton';

// UTILS
import categories from '../../util/categories';

// IMG
import Information from '../../img/categories-icon/icon-information.png';
import Message from '../../img/categories-icon/icon-paper-plane.png';
import Delivery from '../../img/categories-icon/icon-delivery.png';

import './Home.css';

const Home = () => {
  const { data: products = [], isLoading } = useFetch(getAllProducts);

  return (
    <div className="layout_with_sidebar">
      <div className="sidebar desktop-only">
        <div className="menu-categories">
          <ul>
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
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
      </div>

      <div className="main-content">
        <div className="goods">
          <div className="more-goods">
            <div className="goods-container">
              <h2>Більше товарів для вибору</h2>
              <section className="more-goods__grid">
                {isLoading
                  ? [...new Array(25)].map((_, index) => <Skeleton key={index} />)
                  : products.map((item) => <ItemCard key={item.id} item={item} />)}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

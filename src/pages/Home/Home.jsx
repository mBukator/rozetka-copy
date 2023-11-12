import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ItemCard from '../../components/ItemCard/ItemCard';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

import categories from '../../util/categories';

import './Home.css';

import Information from '../../img/categories-icon/icon-information.png';
import Message from '../../img/categories-icon/icon-paper-plane.png';
import Delivery from '../../img/categories-icon/icon-delivery.png';
import Skeleton from './Skeleton';

const Home = ({ handleAddToCart }) => {
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)  //lazy-loading

  useEffect(() => {
    axios.get("https://65501dfa7d203ab6626d92b6.mockapi.io/goods")
    .then((response)=>{
      setGoods(response.data);
      setIsLoading(false)   //lazy-loading
    })
  }, [])

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
                {
                  isLoading
                  ? [...new Array(5)].map(() => <Skeleton/>)
                  : goods.map((item) => (<ItemCard key={item.id} item={item} handleAddToCart={handleAddToCart} />))
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
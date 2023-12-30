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

import './Home.css';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  const { data: products = [], isLoading } = useFetch(getAllProducts);

  return (
    <div className="layout_with_sidebar">
      <Sidebar />

      <div className="main-content">
        <div className="goods">
          <div className="more-goods">
            <div className="goods-container">
              <h2>Більше товарів для вибору</h2>
              <div className="more-goods__grid">
                {isLoading
                  ? [...new Array(25)].map((_, index) => <Skeleton key={index} />)
                  : products.map((item) => <ItemCard key={item.id} item={item} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

// CUSTOM HOOKS IMPORTS
import useFetch from '../../hooks/useFetch';

import { getAllProducts } from '../../API';

// COMPONENTS
import ItemCard from '../../components/home/ItemCard/ItemCard';
import Skeleton from './Skeleton';

import Sidebar from '../../components/home/Sidebar/Sidebar';

import styles from './Home.module.css';

const Home = () => {
  const { data: products = [], isLoading } = useFetch(getAllProducts);

  return (
    <div className={styles.layout_with_sidebar}>
      <Sidebar />

      <div className={styles.main_content}>
        <div className="goods">
          <div className="more-goods">
            <div className={styles.goods_container}>
              <h2>Більше товарів для вибору</h2>
              <div className={styles.goods__grid}>
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

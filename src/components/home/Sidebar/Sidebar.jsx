import React from 'react';
import categories from '../../../util/categories';
import CategoryItem from '../CategoryItem/CategoryItem';
// IMG
import Information from '../../../img/categories-icon/icon-information.png';
import Message from '../../../img/categories-icon/icon-paper-plane.png';
import Delivery from '../../../img/categories-icon/icon-delivery.png';

import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} ${styles.desktop_only}`}>
      <div className={`${styles.menu_categories} ${styles.sidebar__element}`}>
        <ul>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </ul>
      </div>

      <div className="dovidk-centr sidebar__element">
        <a className={`${styles.link} ${styles.not_category}`} href="index.html">
          <span>
            <img className={styles.icon} src={Information} alt="icon" />
          </span>
          Довідковий центр
        </a>
      </div>
      <div className="chat-rozetka sidebar__element">
        <a className={`${styles.link} ${styles.not_category}`} href="index.html">
          <span>
            <img className={styles.icon} src={Message} alt="icon" />
          </span>
          Чат з ROZETKA
        </a>
      </div>
      <div className="delivery-point sidebar__element">
        <a className={`${styles.link} ${styles.not_category}`} href="index.html">
          <span>
            <img className={styles.icon} src={Delivery} alt="icon" />
          </span>
          Точки видачі Rozetka
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

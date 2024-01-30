import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductPageNavigation.module.css';

export default function ProductPageNavigation({ id }) {
  return (
    <div className={styles.page_nav__container}>
      <ul className={styles.product_nav__pages}>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}`}>Усе про товар</Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}/characteristics`}>Характеристики</Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}/comments`}>Відгуки</Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}/questions`}>Питання</Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}/photos`}>Фото</Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={`/product/${id}/related`}>Купують разом</Link>
        </li>
      </ul>
    </div>
  );
}

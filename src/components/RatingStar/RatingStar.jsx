import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './RatingStar.module.css';

export default function RatingStar() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Оцініть товар</p>
      <div>
        <ul className={styles.stars__wrapper}>
          <li className={styles.single_star}>
            <FaStar size={35} className={styles.star} />
            <span className={styles.label}>Погано</span>
          </li>
          <li className={styles.single_star}>
            <FaStar size={35} className={styles.star} />
            <span className={styles.label}>Так собі</span>
          </li>
          <li className={styles.single_star}>
            <FaStar size={35} className={styles.star} />
            <span className={styles.label}>Нормально</span>
          </li>
          <li className={styles.single_star}>
            <FaStar size={35} className={styles.star} />
            <span className={styles.label}>Добре</span>
          </li>
          <li className={styles.single_star}>
            <FaStar size={35} className={styles.star} />
            <span className={styles.label}>Чудово</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

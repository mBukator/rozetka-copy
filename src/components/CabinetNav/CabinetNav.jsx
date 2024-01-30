import React from 'react';
import styles from './CabinetNav.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CabinetNav = () => {
  const { currentUser } = useAuth();

  return (
    <div className={styles.sidebar}>
      <ul className={styles.nav}>
        <li className={`${styles.single_link} ${styles.user}`}>
          <div className={styles.section}>
            <Link className={styles.link} to={'personal-information'}>
              {currentUser.email}
            </Link>
          </div>
        </li>
        <div className={styles.divider} />
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/orders'}>
            Усе про товар
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/wishlist'}>
            Характеристики
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/communications'}>
            Відгуки
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/recently-viewed'}>
            Питання
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/subscribes'}>
            Фото
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/wallet'}>
            Купують разом
          </Link>
        </li>{' '}
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/bonus'}>
            Купують разом
          </Link>
        </li>{' '}
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/reviews'}>
            Купують разом
          </Link>
        </li>{' '}
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/message'}>
            Купують разом
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/promotions'}>
            Купують разом
          </Link>
        </li>
        <li className={styles.single_link}>
          <Link className={styles.link} to={'/fitsize-params'}>
            Купують разом
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CabinetNav;

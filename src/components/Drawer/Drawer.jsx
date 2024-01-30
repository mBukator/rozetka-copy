import React from 'react';

import styles from './Drawer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Drawer = ({ open, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.first_row}>
              <div className={styles.logo_wrapper}>
                <Link to="/" onClick={onClose}>
                  <img src={logo} alt="Rozetka" className={styles.logo} />
                </Link>
              </div>
              <div className={styles.closeBtn} onClick={onClose}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className={styles.second_row}>
              <div className={styles.user_icon}>
                <i class="fa-regular fa-circle-user"></i>
              </div>
              <div className={styles.login_section}>
                <p className={styles.login}>
                  <span>Вхід</span> | <span>Реєстрація</span>
                </p>
                <p className={styles.sub_text}>
                  Авторизуйтесь для отримання розширених можливостей
                </p>
              </div>
            </div>
          </div>
          <div className={styles.body}></div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

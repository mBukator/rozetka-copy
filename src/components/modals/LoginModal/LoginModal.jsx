import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Button from '../../ui/Button/Button';
import styles from './LoginModal.module.css';

function LoginModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  if (!open) return null;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className={styles.panel}>
          <h2>Вхід</h2>
          <p className={styles.close}>
            <RxCross1 onClick={onClose} size={20} />
          </p>
        </div>
        <div className={styles.form}>
          <form action="">
            <div className={`${styles.input__container} ${styles.login}`}>
              <label className={styles.label} htmlFor="login"> Ел. пошта або телефон</label>
              <input className={styles.input} type="text" id="login" />
            </div>
            <div className={`${styles.input__container} ${styles.password}`}>
              <label className={styles.label} htmlFor="password"> Пароль </label>
              <input className={styles.input} type="password" id="password" />
              <span onClick={handleShowPassword}>
                {showPassword ? (
                  <FaEyeSlash size={20} className={styles.showPassword} />
                ) : (
                  <FaEye size={20} className={styles.showPassword} />
                )}
              </span>
            </div>
          </form>
          <Button text={"Увійти"} />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default LoginModal;

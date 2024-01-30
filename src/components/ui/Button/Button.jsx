import React from 'react';
import styles from './Button.module.css';

function Button({ text, type, onClick, btnWidth }) {
  return (
    <div className={styles.button__container}>
      <button
        onClick={onClick}
        type={type}
        className={styles.button}
        style={{ width: btnWidth ? btnWidth : '100%' }}>
        {text}
      </button>
    </div>
  );
}

export default Button;

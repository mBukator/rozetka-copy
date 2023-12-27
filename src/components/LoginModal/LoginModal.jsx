import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import './LoginModal.css';
import Button from '../ui/Button/Button';

function LoginModal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  if (!open) return null;
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className="top-part">
          <h2>Вхід</h2>
          <p className="closeBtn">
            <RxCross1 onClick={onClose} size={20} />
          </p>
        </div>
        <div className="form">
          <form action="">
            <div className="input-field login">
              <label htmlFor="login"> Ел. пошта або телефон</label>
              <input type="text" id="login" />
            </div>
            <div className="input-field password">
              <label htmlFor="password"> Пароль </label>
              <input type="password" id="password" />
              <span onClick={handleShowPassword}>
                {showPassword ? (
                  <FaEyeSlash size={20} className="showPassword" />
                ) : (
                  <FaEye size={20} className="showPassword" />
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

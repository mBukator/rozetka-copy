import React from 'react';
import './Button.css';

function Button({ text, type, onClick, btnWidth }) {
  return (
    <div className="button__container">
      <button onClick={onClick} type={type} className="button" style={{width: btnWidth ? btnWidth : '100%'}}>
        {text}
      </button>
    </div>
  );
}

export default Button;

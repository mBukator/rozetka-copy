import React from 'react';
import './Button.css';

function Button({ text, type, onClick }) {
  return (
    <div className="button__container">
      <button onClick={onClick} type={type} className="button">
        {text}
      </button>
    </div>
  );
}

export default Button;

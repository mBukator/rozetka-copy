import React from 'react';
import './ProductComment.css'


function ProductComment(props) {
  return (
    <div className="comment__container">
      <div className="comment__wrapper">
        <li>{props.comment}</li>
      </div>
    </div>
  );
}

export default ProductComment;

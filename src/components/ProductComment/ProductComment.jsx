import React, { useContext } from 'react';
import { CommentsContext } from '../../context/CommentsContext';
import './ProductComment.css';

function ProductComment() {
  const { comments } = useContext(CommentsContext);

  return (
    <div className="comments">
      <h3>Коментарі:</h3>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id} className="comment__container">
            <div className="comment__wrapper">
              <p className="comm__text">{comment.text}</p>
              <p>
                <span className="comm__label">Переваги: </span>
                {comment.advantages}
              </p>
              <p>
                <span className="comm__label">Недоліки: </span>
                {comment.disadvantages}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductComment;

import React, { useContext } from 'react';
import { CommentsContext } from '../../context/CommentsContext';

import styles from './ProductComment.module.css';

function ProductComment() {
  const { comments } = useContext(CommentsContext);

  return (
    <div className="comments">
      <h3>Коментарі:</h3>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.container}>
            <div className={styles.wrapper}>
              <p className={styles.comm__text}>{comment.text}</p>
              <p>
                <span className={styles.comm__label}>Переваги: </span>
                {comment.advantages}
              </p>
              <p>
                <span className={styles.comm__label}>Недоліки: </span>
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

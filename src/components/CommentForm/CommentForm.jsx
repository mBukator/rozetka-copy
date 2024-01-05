import React, { useContext } from 'react';
import { CommentsContext } from '../../context/CommentsContext';
import Button from '../ui/Button/Button';

import styles from './CommentForm.module.css';

function CommentForm() {
  const {
    comment,
    setComment,
    advantages,
    setAdvantages,
    disadvantages,
    setDisadvantages,
    handleReviewSubmit,
  } = useContext(CommentsContext);

  return (
    <form action="" onSubmit={handleReviewSubmit}>
      <p className={styles.label}>Переваги</p>
      <textarea
        className={styles.one_row}
        name="advantages"
        id="advantages"
        cols="30"
        rows="1"
        value={advantages}
        onChange={(e) => setAdvantages(e.target.value)}
      />
      <p className={styles.label}>Недоліки</p>
      <textarea
        className={styles.one_row}
        name="disadvantages"
        id="disadvantages"
        cols="30"
        rows="1"
        value={disadvantages}
        onChange={(e) => setDisadvantages(e.target.value)}
      />
      <p className={styles.label}>Коментар</p>
      <textarea
        className={styles.comment}
        name="comment"
        id="comment"
        cols="60"
        rows="10"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button type={'submit'} text={'Додати відгук'} />
    </form>
  );
}

export default CommentForm;

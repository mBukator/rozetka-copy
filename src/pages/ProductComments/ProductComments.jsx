import React from 'react';

import RatingStar from '../../components/RatingStar/RatingStar';
import ProductComment from '../../components/ProductComment/ProductComment';
import CommentForm from '../../components/CommentForm/CommentForm';

import styles from './ProductComments.module.css';

export default function ProductComments() {
  return (
    <div className={styles.reviews__container}>
      <div className={styles.review__form}>
        <div>
          <div>
            <div className="review__rate">
              <RatingStar />
            </div>
            <div className="review__comment">
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
      <ProductComment />
    </div>
  );
}

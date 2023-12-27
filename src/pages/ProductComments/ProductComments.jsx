import React, { useState } from 'react';
import ProductPageNavigation from '../../components/ProductPageNavigation/ProductPageNavigation';
import RatingStar from '../../components/RatingStar/RatingStar';
import './ProductComments.css';
import Button from '../../components/ui/Button/Button';
import ProductComment from '../../components/ProductComment/ProductComment';

export default function ProductComments() {
  const [review, setReview] = useState('');
  const [comments, setComments] = useState([]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newComment = { text: review, id: Date.now() };
    setComments([...comments, newComment]);
    setReview('');

    // console.log('Review Text: ', review);
    alert(`Ваш відгук: "${review}" додано успішно`);
  };

  return (
    <div className="product-review">
      <ProductPageNavigation />
      <div className="product-review__container">
        <div className="product-review__wrapper">
          <div className="review-block">
            <div className="review__rate">
              <p>Оцініть товар</p>
              <RatingStar />
            </div>
            <div className="review__comment">
              <form action="" onSubmit={handleReviewSubmit}>
                <p>Коментар</p>
                <textarea
                  name="comment"
                  id="comment"
                  cols="60"
                  rows="10"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <Button type={'submit'} text={'Додати відгук'} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div>
          <h3>Коментарі:</h3>
          <ul>
            {comments.map((comment) => (
              <ProductComment key={comment.id} comment={comment.text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

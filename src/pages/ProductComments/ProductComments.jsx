import React, { useState } from 'react';
import RatingStar from '../../components/RatingStar/RatingStar';
import './ProductComments.css';
import Button from '../../components/ui/Button/Button';
import ProductComment from '../../components/ProductComment/ProductComment';
import { CommentsContext } from '../../context/CommentsContext';

export default function ProductComments() {
  const [comment, setComment] = useState('');
  const [advantages, setAdvantages] = useState('');
  const [disadvantages, setDisadvantages] = useState('');
  const [comments, setComments] = useState([]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      advantages: advantages,
      disadvantages: disadvantages,
      text: comment,
      id: Date.now(),
    };
    setComments([...comments, newComment]);
    setAdvantages('');
    setDisadvantages('');
    setComment('');
    // console.log('Review Text: ', review);
    alert(
      `Ваш відгук: \nПереваги: ${advantages} \nНедоліки: ${disadvantages} \nКоментар: ${comment} \n\nдодано успішно!!!`,
    );
  };

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <div className="product-review">
        <div className="product-review__container">
          <div className="product-review__wrapper">
            <div className="review-block">
              <div className="review__rate">
                <RatingStar />
              </div>
              <div className="review__comment">
                <form action="" onSubmit={handleReviewSubmit}>
                  <p className="comment__label">Переваги</p>
                  <textarea
                    className="one-row"
                    name="advantages"
                    id="advantages"
                    cols="30"
                    rows="1"
                    value={advantages}
                    onChange={(e) => setAdvantages(e.target.value)}
                  />
                  <p className="comment__label">Недоліки</p>
                  <textarea
                    className="one-row"
                    name="disadvantages"
                    id="disadvantages"
                    cols="30"
                    rows="1"
                    value={disadvantages}
                    onChange={(e) => setDisadvantages(e.target.value)}
                  />
                  <p className="comment__label">Коментар</p>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="60"
                    rows="10"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Button type={'submit'} text={'Додати відгук'} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <ProductComment />
      </div>
    </CommentsContext.Provider>
  );
}

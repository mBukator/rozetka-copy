import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import ProductPageNavigation from '../../ProductPageNavigation/ProductPageNavigation';
import { CommentsContext } from '../../../context/CommentsContext';

function ProductPageLayout() {
  const { id } = useParams();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [advantages, setAdvantages] = useState('');
  const [disadvantages, setDisadvantages] = useState('');

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
    <CommentsContext.Provider value={{ comments, setComments, comment, setComment, advantages, setAdvantages, disadvantages, setDisadvantages, handleReviewSubmit }}>
      <ProductPageNavigation id={id} />
      <Outlet />
    </CommentsContext.Provider>
  );
}

export default ProductPageLayout;

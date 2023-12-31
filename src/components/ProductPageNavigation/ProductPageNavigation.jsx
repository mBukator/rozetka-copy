import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPageNavigation.css';

export default function ProductPageNavigation({ id }) {
  return (
    <div className='page-navigation__container'>
      <ul className="product-info__pages">
        <li>
          <Link to={`/product/${id}`}>Усе про товар</Link>
        </li>
        <li>
          <Link to={`/product/${id}/characteristics`}>Характеристики</Link>
        </li>
        <li>
          <Link to={`/product/${id}/comments`}>Відгуки</Link>
        </li>
        <li>
          <Link to={`/product/${id}/questions`}>Питання</Link>
        </li>
        <li>
          <Link to={`/product/${id}/photos`}>Фото</Link>
        </li>
        <li>
          <Link to={`/product/${id}/related`}>Купують разом</Link>
        </li>
      </ul>
    </div>
  );
}

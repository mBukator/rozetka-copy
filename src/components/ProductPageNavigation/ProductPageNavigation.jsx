import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPageNavigation.css'

export default function ProductPageNavigation({id}) {
  return (
    <div>
      <ul className="product-info__pages">
        <li>
          <Link to={''}>Усе про товар</Link>
        </li>
        <li>
          <Link to={`/product/${id}/characteristics`}>Характеристики</Link>
        </li>
        <li>
          <Link to={`/product/${id}/comments`}>Відгуки</Link>
        </li>
        <li>
          <Link to={''}>Питання</Link>
        </li>
        <li>
          <Link to={''}>Фото</Link>
        </li>
        <li>
          <Link to={''}>Купують разом</Link>
        </li>
      </ul>
    </div>
  );
}

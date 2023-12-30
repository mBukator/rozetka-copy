import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './RatingStar.css';

export default function RatingStar() {
  return (
    <div className="star-rate">
      <p className="star-rate__title">Оцініть товар</p>
      <div className="stars__container">
        <ul className="stars__wrapper">
          <li className="single-star">
            <FaStar size={35} className="star" />
            <span className='single-star__label'>Погано</span>
          </li>
          <li className="single-star">
            <FaStar size={35} className="star" />
            <span className='single-star__label'>Так собі</span>
          </li>
          <li className="single-star">
            <FaStar size={35} className="star" />
            <span className='single-star__label'>Нормально</span>
          </li>
          <li className="single-star">
            <FaStar size={35} className="star" />
            <span className='single-star__label'>Добре</span>
          </li>
          <li className="single-star">
            <FaStar size={35} className="star" />
            <span className='single-star__label'>Чудово</span>
          </li>
        </ul>
        {/* <FaStarHalfAlt />
      <AiOutlineStar /> */}
      </div>
    </div>
  );
}

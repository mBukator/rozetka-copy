import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchExchangeRate from '../../../api/exchangeRateAPI';
import { changeExchangeRate } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import convertToSelectedCurrency from '../../../util/convertToSelectedCurrency';

import styles from './ItemCard.module.css';

const ItemCard = ({ item }) => {
  const { id, title, price, image } = item;
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.handleChangeCurrency.currency);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRateAndUpdateRedux = async () => {
      try {
        const rate = await fetchExchangeRate(selectedCurrency);
        setExchangeRate(rate);
        dispatch(changeExchangeRate(rate));
      } catch (error) {
        console.log('ERROR IN ITEM CARD EXCHANGE RATE: ', error);
      }
    };
    fetchExchangeRateAndUpdateRedux();
  }, [selectedCurrency, dispatch]);

  return (
    <div className={styles.tile}>
      <div className="tile__inner">
        <Link className="tovar" to={`/product/${id}`}>
          <img className={styles.tovar__image} src={image} alt="" />
        </Link>
        <Link className={styles.tile__title} to={`/product/${id}`}>
          {title}
        </Link>
        <div className={styles.prices}>
          <div className={styles.price__old}>
            <span>
              {convertToSelectedCurrency(price, exchangeRate, selectedCurrency)}{' '}
              {selectedCurrency === 'UAH' ? '₴' : '$'}
            </span>
          </div>
          <div className={styles.price__new}>
            <span>
              {convertToSelectedCurrency(price, exchangeRate, selectedCurrency)}{' '}
              {selectedCurrency === 'UAH' ? '₴' : '$'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

import React, { useEffect, useState } from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom';
import fetchExchangeRate from '../../api/exchangeRateAPI';
import { changeExchangeRate } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import convertToSelectedCurrency from '../../util/convertToSelectedCurrency'

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
    <div className="tile">
      <div className="tile__inner">
        <Link className="tovar" to={`/product/${id}`}>
          <img src={image} alt="" />
        </Link>
        <Link className="tile__title" to={`/product/${id}`}>
          {title}
        </Link>
        <div className="prices">
          <div className="price__old">
            <span>
              {convertToSelectedCurrency(price, exchangeRate, selectedCurrency)}{' '}
              {selectedCurrency === 'UAH' ? '₴' : '$'}
            </span>
          </div>
          <div className="price__new">
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

import React, { useEffect, useState } from 'react';

// REACT ROUTER IMPORTS
import { Outlet, useParams } from 'react-router-dom';

// REDUX IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions';

// CUSTOM HOOKS IMPORTS
import useReceiveProductInfo from '../../hooks/useReceiveProductInfo';
import useFetch from '../../hooks/useFetch';
import { getProductById } from '../../API';

// AXIOS
import axios from 'axios';

// COMPONENTS
import Button from '../../components/ui/Button/Button';

import convertToSelectedCurrency from '../../util/convertToSelectedCurrency';

import { FaStar } from 'react-icons/fa';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(null);

  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.handleChangeCurrency.currency);

  const customDeps = [exchangeRate, selectedCurrency];

  const addCart = (product) => {
    dispatch(addProduct(product));
  };

  // Exchange API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const exchangeRateResponse = await axios.get('https://open.er-api.com/v6/latest/UAH');
        const rate = exchangeRateResponse.data.rates.USD;
        setExchangeRate(rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchData();
  }, []);

  const { data, isLoading } = useFetch(
    () => getProductById(id),
    {
      onSuccess: (data) => {
        if (exchangeRate) {
          const convertedPrice = convertToSelectedCurrency(
            data.price,
            exchangeRate,
            selectedCurrency,
          );

          const updatedProductData = {
            ...data,
            convertedPrice,
          };

          setProduct(updatedProductData);
          console.log('UPDATED: ', updatedProductData);
        }
      },
    },
    customDeps,
  );

  useReceiveProductInfo(product);

  return (
    <>
      <div className="product__page">
        <div className="wrapper">
          <div className="product-info">
          </div>
          <div className="product__main">
            <div className="product__img">
              <img src={product.image} alt="" />
            </div>

            <div className="product__info-panel">
              <h2>{product.title}</h2>

              <div className="section rates-and-price">
                <div className="rates">
                  <div className="product__category">
                    <p>Категорія: {product.category}</p>
                  </div>
                  <div className="product__rating">
                    {product.rating?.rate && (
                      <p>
                        <span className="lg-rate">{product.rating.rate}</span>
                        <span className="sm-rate">/5</span>
                        <FaStar size={15} color="gold" /> ({product.rating.count} Оцінок)
                      </p>
                    )}
                  </div>
                </div>

                <div className="price">
                  <div className="">
                    <span className="amount">
                      {convertToSelectedCurrency(product.price, exchangeRate, selectedCurrency)}
                    </span>
                    <span className="currency"> {selectedCurrency === 'UAH' ? '₴' : '$'}</span>
                  </div>
                  <Button text={'Купити'} onClick={() => addCart(product)} btnWidth={'150px'} />
                </div>
              </div>

              <div className="section product__description">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductPage;

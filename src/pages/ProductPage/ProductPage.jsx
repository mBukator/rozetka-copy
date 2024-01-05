import React, { useEffect, useState } from 'react';

// REACT ROUTER IMPORTS
import { Outlet, useParams } from 'react-router-dom';

// REDUX IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/actions';

// CUSTOM HOOKS IMPORTS
import useFetch from '../../hooks/useFetch';
import useReceiveProductInfo from '../../hooks/useReceiveProductInfo';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { getProductById } from '../../API';

// AXIOS
import axios from 'axios';

// COMPONENTS
import Button from '../../components/ui/Button/Button';

import convertToSelectedCurrency from '../../util/convertToSelectedCurrency';

import { FaStar } from 'react-icons/fa';

import styles from './ProductPage.module.css';

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

  useDocumentTitle(`${product.title}`);

  return (
    <>
      <div className={styles.product__page}>
        <div className="wrapper">
          <div className="product-info"></div>
          <div className={styles.product__main}>
            <div className={styles.product__img}>
              <img className={styles.image} src={product.image} alt="" />
            </div>

            <div className="product__info-panel">
              <h2>{product.title}</h2>

              <div className={styles.section}>
                <div className={styles.rates}>
                  <div className="product__category">
                    <p>Категорія: {product.category}</p>
                  </div>
                  <div className="product__rating">
                    {product.rating?.rate && (
                      <p>
                        <span className={styles.lg_rate}>{product.rating.rate}</span>
                        <span className={styles.sm_rate}>/5</span>
                        <FaStar size={15} color="gold" /> ({product.rating.count} Оцінок)
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.price}>
                  <div>
                    <span className={styles.amount}>
                      {convertToSelectedCurrency(product.price, exchangeRate, selectedCurrency)}
                    </span>
                    <span className={styles.currency}>
                      {' '}
                      {selectedCurrency === 'UAH' ? '₴' : '$'}
                    </span>
                  </div>
                  <Button text={'Купити'} onClick={() => addCart(product)} btnWidth={'150px'} />
                </div>
              </div>

              <div className={`${styles.section} ${styles.product__description}`}>
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

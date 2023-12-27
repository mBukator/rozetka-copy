import React, { useEffect, useState } from 'react';

// REACT ROUTER IMPORTS
import { useParams } from 'react-router-dom';

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
// import RatingStar from '../../components/RatingStar/RatingStar';
import ProductPageNavigation from '../../components/ProductPageNavigation/ProductPageNavigation';

import './ProductPage.css';
import convertToSelectedCurrency from '../../util/convertToSelectedCurrency';

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

  const { data: fetchedData, isLoading } = useFetch(
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
    <div className="product__page">
      <div className="wrapper">
        <div className="product-info">
          <ProductPageNavigation id={id} />
        </div>
        <div className="product__main">
          <div className="product__img">
            <img src={product.image} alt="" />
          </div>
          <div className="product__info-panel">
            <h2>{product.title}</h2>
            <h2>
              {convertToSelectedCurrency(product.price, exchangeRate, selectedCurrency)}
              {selectedCurrency === 'UAH' ? '₴' : '$'}
            </h2>
            <div className="product__category">
              <p>Категорія: {product.category}</p>
            </div>
            <div className="product__description">
              <p>{product.description}</p>
            </div>
            {/* <RatingStar /> */}
            <Button text={'Додати до кошика'} onClick={() => addCart(product)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

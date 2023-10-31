import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0)

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr);
        handlePrice();
    }

    const handlePrice = () => {
        let totalPaycheck = 0;
        cart.map((item) => (totalPaycheck += item.amount * item.salesPrice))
        setPrice(totalPaycheck)
    }

    useEffect(() => {
        handlePrice()
    })


    return (
        <div className='cart__menu'>
          {cart.map((item) => (
          <div className="product" key={item.id}>
              <div className="product__view">
                <img className='product__img' src={item.img} alt="" />
                <p className='product__title'>{item.title}</p>
              </div>
              <div className='product__quantity'>
                <button className='quantity__increase' onClick={() => handleChange(item, 1)}>+</button>
                <button className='quantity__amount'>{item.amount}</button>
                <button className='quantity__decrease' onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div className='product__info'>
                <span className='product__price'>{item.salesPrice}</span>
                <button className='product__remove' onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span className='total__title'>Загальна сума: </span>
            <span className='total__price'>{price} ₴</span>
          </div>
        </div>
      );
    
}

export default Cart
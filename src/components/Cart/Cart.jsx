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
        <article>
          {cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.salesPrice}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Загальна сума: </span>
            <span>{price} ₴</span>
          </div>
        </article>
      );
    
}

export default Cart
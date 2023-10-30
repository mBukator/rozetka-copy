import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
// import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) {
      arr[ind].amount = 1;
    }
    setCart([...arr]);
  };

  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Body handleAddToCart={handleAddToCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;

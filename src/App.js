import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
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
      <Navbar size={cart.length} />
      <Routes>
        <Route path='/' element=<Home handleAddToCart={handleAddToCart} /> />
        <Route path='/cart' element=<Cart cart={cart} setCart={setCart} handleChange={handleChange}/> />
        <Route path='*' element=<h1>404</h1> /> {/* !!!!!!!! */}
      </Routes>
    </div>
  );
}

export default App;

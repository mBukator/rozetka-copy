import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductCharacteristics from './pages/ProductCharacteristics/ProductCharacteristics';
import ProductComments from './pages/ProductComments/ProductComments';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/product/:id" element=<ProductPage /> />
        <Route path={`/product/:id/characteristics`} element=<ProductCharacteristics /> />
        <Route path={`/product/:id/comments`} element=<ProductComments /> />
        <Route path="*" element=<h1>404</h1> /> {/* !!!!!!!! */}
      </Routes>
    </div>
  );
};

export default App;

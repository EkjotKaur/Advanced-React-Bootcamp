import React, { Component, Suspense, lazy, useState } from 'react';
import './App.css';

import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';

const CartComponent = lazy(() => import('./components/CartComponent'));
const ProductForm = lazy(() => import('./components/ProductForm'));


function App() {

  return (
    <div className="App">
      <Container>
        <NavbarComponent />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <CartComponent />
            </Suspense>
          } />
          <Route path="/new_product" element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ProductForm />
            </Suspense>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<ProductList />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

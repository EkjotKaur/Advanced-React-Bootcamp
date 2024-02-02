import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; // upto React 17 version
import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader CssMinifyPlugin
import './index.css';
import App from './App';
import ProductProvider from './context/ProductProvider';
import { BrowserRouter } from 'react-router-dom';
import cartStore from './mobx/CartStore';
import { enableLogging } from 'mobx-logger'
export const CartContext = createContext(cartStore); // no need for Context Provider

enableLogging();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>


);


import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; // upto React 17 version
import './index.css';
import App from './App';
import ProductProvider from './context/ProductProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>

);

// react 17 code
// ReactDOM.render(<App />, document.getElementById("root"))

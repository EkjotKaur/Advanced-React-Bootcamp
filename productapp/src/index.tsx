import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; // upto React 17 version
import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader CssMinifyPlugin
import './index.css';
import App from './App';
import ProductProvider from './context/ProductProvider';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider';
import BatchApp from './react18/BatchApp';
import ReactApp from './react18/ReactApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <BrowserRouter>
//     <ProductProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </ProductProvider>
//   </BrowserRouter>

// );

// root.render(<BatchApp />);
root.render(<ReactApp />);
// react 17 code
// ReactDOM.render(<App />, document.getElementById("root"))

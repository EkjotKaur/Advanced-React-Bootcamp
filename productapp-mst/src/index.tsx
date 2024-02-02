import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; // upto React 17 version
import 'bootstrap/dist/css/bootstrap.min.css'; // css-loader style-loader CssMinifyPlugin
import './index.css';
import App from './App';
import ProductProvider from './context/ProductProvider';
import { BrowserRouter } from 'react-router-dom';

import { enableLogging } from 'mobx-logger'
import { autorun, reaction } from 'mobx';

import { RootStoreContext, rootStore } from './mobx/models/Root'
enableLogging();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <BrowserRouter>
    <ProductProvider>
      <RootStoreContext.Provider value={rootStore}>
        <App />
      </RootStoreContext.Provider>

    </ProductProvider>  
  </BrowserRouter>


);

autorun(() => {

})



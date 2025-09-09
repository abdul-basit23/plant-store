import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store.js';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
   <>
   <Provider store={store}>
    <Router>
      <div>
      <Routes>
         
        <Route path={"/"} element={<><LandingPage/></>} />
        <Route path={"/ProductListing"} element={<><Header/><ProductListingPage/></>} />
        <Route path={"/ShoppingCart"} element={<><Header/><ShoppingCart/></>} />
          </Routes>
        <Toaster
            position="bottom-right"
            toastOptions={{
              duration:2000,
              style:{ background: '#10b981',
                color: '#fff',}
            }}

        />
       

</div>
    
    </Router>
   </Provider>
   
   
   
   
   
   
   
   </>
  )
}

export default App

import Header from './components/HeaderComponent/Header/Header';
import Footer from './components/FooterComponent/Footer/Footer';
import Main from './components/MainComponent/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import { useState } from 'react';
import HomePage from './components/MainComponent/HomePage/HomePage';
import Signup from './components/signup/signup';
import ProductPage from './components/MainComponent/ProductPage/ProductPage';
import ProductDetailPage from './components/MainComponent/ProductDetailPage/ProductDetailPage';

import ShoppingCart from './components/MainComponent/ShoppingCart/ShoppingCart';
import './App.css';
import { CartContext } from './context/cartContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [p, setP] = useState('')
  
  return (
    <div className="App">

      {/* <SignInOutContainer /> */}
      {/* <Login></Login> */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/page' element={<h1>iafjdsf</h1>}></Route>
        
        <Route exact path='/products' Component={ProductPage} element={<ProductPage/>}></Route>
        <Route path='/products/:page?/:perPage?/:keyword?' Component={ProductPage} element={<ProductPage/>}></Route>

        <Route path="/cart" element={
          <CartContext.Provider value={[p, setP]

          }>  <ShoppingCart /></CartContext.Provider>

        }></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/product/:id" Component={ProductDetailPage} element={<ProductDetailPage></ProductDetailPage>}></Route>
        <Route exact path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='*' element={<h1>404 not found</h1>}></Route>
      </Routes>
      <Main></Main>
      <Footer></Footer>

    </div>
  );
}
export default App;
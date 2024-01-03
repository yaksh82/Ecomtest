import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Switch, Router, Routes, Route } from "react-router-dom";
import Products from './Component/Products';
import Product from './Component/Product';
import RegistrationPage from './Component/RegistrationPage';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/products/:id' element={<Product/>}></Route>
        <Route exact path='/registration' element={<RegistrationPage/>}></Route>
        <Route exact path='/login' element={<LoginPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
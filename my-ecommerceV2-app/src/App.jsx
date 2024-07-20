import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headerFooter/header'
import Footer from './components/headerFooter/footer'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import Products from './components/product/products'
import { Route, Routes } from "react-router-dom";
import HeaderFooter from './components/headerFooter/headerFooter'
import Layout from './components/Layout'
import PageNotFound from './components/pagenotfound'

function App() {
  return (
  <Routes>
    <Route element={<HeaderFooter />}>
    <Route path="/" index element={<Home />} /> 
    <Route path="/shop" index element={<Products />} /> 
    <Route path="/getintouch" index element={<Contact />} />
    <Route path="/*" index element={<PageNotFound/>} />
    </Route>
  </Routes>
  );
}



export default App

import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App

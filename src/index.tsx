import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToursApp from './components/tours/ToursApp';
import MenuApp from './components/menu/MenuApp'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tours" element={<ToursApp />} />
      <Route path="menu" element={<MenuApp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


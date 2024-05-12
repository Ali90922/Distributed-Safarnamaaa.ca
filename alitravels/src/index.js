import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Scheme from './Schematicz';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/scheme" element={<Scheme />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

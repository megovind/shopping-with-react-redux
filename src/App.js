import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./container/Header";
import ProductListing from "./container/product-listing";
import ProductDetails from "./container/product-details";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Page not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

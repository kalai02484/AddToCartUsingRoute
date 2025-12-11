import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setItems(res.data);
    } catch (err) {
      console.log("Error in fetching the Products", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList items={items} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

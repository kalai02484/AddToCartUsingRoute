import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const ProductList = ({ addOrRemoveFromCart, cart }) => {
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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-4 gap-4 mt-16 mb-8">
      {items.length === 0 ? (
        <p>No products available.</p>
      ) : (
        items.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addOrRemoveFromCart={addOrRemoveFromCart}
            inCart={cart.some((ele) => ele.id === item.id)}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  

  const addOrRemoveFromCart = (item) => {
    const exists = cart.find((product) => product.id === item.id);
    if (exists) {
      setCart(cart.filter((product) => product.id !== item.id));
      console.log("Removed from cart:", cart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      console.log("Added to cart:", cart);
    }   
  };

  // const inCart = ()=>{
  //   const presentItemsInCart= cart.some((product) => product.id === item.id);
  //   if(presentItemsInCart){
  //     return true;
  //   }else
  //     return false;
  // }


  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}  />
        <Routes>
          <Route path="/" element={<ProductList addOrRemoveFromCart={addOrRemoveFromCart} cart={cart}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

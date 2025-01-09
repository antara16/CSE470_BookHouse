import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add bookHouse to cart
  const addToCart = (bookHouse) => {
    // Ensure bookHouse has an _id or id property for uniqueness
    setCartItems((prevCart) => [...prevCart, bookHouse]);
  };

  // Function to remove item from cart by id
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter(item => item._id !== id));  // Use _id if bookHouse has _id field
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

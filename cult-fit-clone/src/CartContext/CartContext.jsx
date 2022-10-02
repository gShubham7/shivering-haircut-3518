import React from "react";

export const CartContext = React.createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  const handleCart = (newProduct) => {
    if (cart.includes(newProduct)) {
      alert("product already added");
    } else {
      setCart([...cart, newProduct]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };

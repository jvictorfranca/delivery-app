import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import cartContext from './cartContext';

// OBS: Cart terá products, cada products com price e quantitiy.

function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (acum, curr) => acum + (curr.price * curr.quantity), 0,
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const addProductToCart = (product) => {
    const productToadd = { ...product, quantity: 1 };
    const newCart = [...cart, productToadd];
    setCart(newCart);
  };

  const removeProductFromCart = (product) => {
    const newCart = [...cart.filter((item) => item.name !== product.name)];
    setCart(newCart);
  };

  const increaseCartProductQuantityByOne = (product) => {
    cart.find((item) => item.name === product.name).quantity += 1;
    const newCart = [...cart];
    setCart(newCart);
  };

  const decreaseCartProductQuantityByOne = (product) => {
    cart.find((item) => item.name === product.name).quantity -= 1;
    const newCart = [...cart];
    setCart(newCart);
  };

  const contextValue = {
    cart,
    setCart,
    totalPrice,
    addProductToCart,
    increaseCartProductQuantityByOne,
    removeProductFromCart,
    decreaseCartProductQuantityByOne,
  };
  return (
    <cartContext.Provider value={ contextValue }>
      {children}
    </cartContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.shape({
    typeof: 'Symbol(react.element)',
  }).isRequired,
};

export default Provider;

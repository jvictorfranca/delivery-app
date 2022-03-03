import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import cartContext from './cartContext';

// OBS: Cart terá products, cada products com price e quantitiy.

function Provider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acum, curr) => acum + (curr.price * curr.quantity), 0),
    );
  }, [cart]);

  const contextValue = {
    cart, setCart, totalPrice,
  };
  console.log(totalPrice);
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

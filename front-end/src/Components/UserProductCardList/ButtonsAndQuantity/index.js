import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import cartContext from '../../../Context/cartContext';
import './ButtonsAndQuantity.css';

function ButtonsAndQuantity({ product }) {
  const {
    cart,
    addProductToCart,
    removeProductFromCart,
    increaseCartProductQuantityByOne,
    decreaseCartProductQuantityByOne,
  } = useContext(cartContext);
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    const cartProductsName = cart.map((item) => item.name);
    if (!cartProductsName.includes(product.name) && !quantity) {
      setQuantity(0);
    } else if (cart.find((item) => item.name === product.name)) {
      setQuantity(cart.find((item) => item.name === product.name).quantity);
    } else { setQuantity(0); }
  }, [cart, product.name, quantity]);

  const addButtonAction = () => {
    if (quantity === 0) {
      addProductToCart(product);
    } else {
      increaseCartProductQuantityByOne(product);
      setQuantity(quantity + 1);
    }
  };

  const decreaseButtonAction = () => {
    if (quantity === 1) {
      removeProductFromCart(product);
    } else if (quantity > 0) {
      decreaseCartProductQuantityByOne(product);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="button-quantity-box">
      <button type="button" onClick={ decreaseButtonAction }>-</button>
      <p>
        {quantity}
      </p>
      <button type="button" onClick={ addButtonAction }>+</button>
    </div>
  );
}

export default ButtonsAndQuantity;

ButtonsAndQuantity.propTypes = {
  product: propTypes.shape({
    name: propTypes.string,
  }).isRequired,
};

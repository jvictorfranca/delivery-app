import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartContext from '../../Context/cartContext';
import { formatPrice } from '../../utils/format';

function CartButton() {
  const { totalPrice } = useContext(cartContext);
  const totalPriceFormatted = formatPrice(totalPrice);
  return (
    <Link to="/customer/checkout">
      Carrinho
      <p data-testid="customer_products__checkout-bottom-value">{totalPriceFormatted}</p>

    </Link>
  );
}

export default CartButton;

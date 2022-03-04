import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import cartContext from '../../Context/cartContext';
import { formatPrice } from '../../utils/format';

function CartButton() {
  const { totalPrice, cart } = useContext(cartContext);
  const totalPriceFormatted = formatPrice(totalPrice);
  const history = useHistory();
  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      to="/customer/checkout"
      disabled={ cart.length === 0 }
      onClick={ () => {
        history.push('/customer/checkout');
      } }
    >
      Carrinho
      <p data-testid="customer_products__checkout-bottom-value">{totalPriceFormatted}</p>

    </button>
  );
}

export default CartButton;

import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { formatPrice } from '../../utils/format';
import cartContext from '../../Context/cartContext';

function UserCheckoutItem({ product, index }) {
  const { removeProductFromCart } = useContext(cartContext);
  return (

    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.quantity}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {formatPrice(product.price)}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {formatPrice(product.price * product.quantity)}

      </td>
      <td>
        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => { removeProductFromCart(product); } }
        >
          Remover

        </button>

      </td>
    </tr>

  );
}

export default UserCheckoutItem;

UserCheckoutItem.propTypes = {
  product: propTypes.shape({
    quantity: propTypes.number,
    price: propTypes.string,
    name: propTypes.string,
  }).isRequired,
  index: propTypes.number.isRequired,
};

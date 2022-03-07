import React from 'react';
import propTypes from 'prop-types';
import { formatPrice } from '../../utils/format';

function SaleItem({ product, index }) {
  return (

    <tr>
      <td
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index + 1}

      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {product.name}

      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {product.salesProduct.quantity}

      </td>
      <td
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {formatPrice(product.price)}

      </td>
      <td
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        {formatPrice(parseFloat(
          product.price,
        ) * parseFloat(product.salesProduct.quantity))}

      </td>

    </tr>

  );
}

export default SaleItem;

SaleItem.propTypes = {
  product: propTypes.shape({
    salesProduct: propTypes.shape({ quantity: propTypes.number }),
    price: propTypes.string,
    name: propTypes.string,
  }).isRequired,
  index: propTypes.number.isRequired,
};

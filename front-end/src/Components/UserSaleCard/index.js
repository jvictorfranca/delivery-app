import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate, formatSaleNumber } from '../SaleDetail/utils/functions';
import { formatPrice } from '../../utils/format';

function UserSaleCard({ sale }) {
  const [saleDate, setSaleDate] = useState('');

  useEffect(() => {
    const changeDate = async () => {
      const newDate = await formatDate(sale.saleDate);
      setSaleDate(newDate);
    };

    changeDate();
  }, [sale.saleDate]);

  return (
    <Link to={ `/customer/orders/${sale.id}` }>

      <section>
        <p
          data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
        >
          {sale.status}

        </p>
        <p
          data-testid={ `customer_orders__element-order-date--${sale.id}` }
        >
          {saleDate}

        </p>
        <p
          data-testid={ `customer_orders__element-order-id-${sale.id}` }
        >
          {formatSaleNumber(sale.id)}

        </p>
        <p
          data-testid={ `customer_orders__element-card-price--${sale.id}` }
        >
          {formatPrice(sale.totalPrice)}

        </p>
      </section>
    </Link>
  );
}

export default UserSaleCard;

UserSaleCard.propTypes = {
  sale: propTypes.shape({
    id: propTypes.number,
    saleDate: propTypes.string,
    status: propTypes.string,
    totalPrice: propTypes.number,
  }).isRequired,
};

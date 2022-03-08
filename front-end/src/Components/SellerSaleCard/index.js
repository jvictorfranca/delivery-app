import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  formatDate,
  formatSaleAdress,
} from '../SaleDetail/utils/functions';
import { formatPrice } from '../../utils/format';

function SellerSaleCard({ sale }) {
  const [saleDate, setSaleDate] = useState('');
  const [saleAddress, setSaleAdress] = useState('');

  useEffect(() => {
    const changeDate = async () => {
      const newDate = await formatDate(sale.saleDate);
      setSaleDate(newDate);
    };

    changeDate();
  }, [sale.saleDate]);

  useEffect(() => {
    const changeAdress = async () => {
      const newAdress = await formatSaleAdress(sale);
      setSaleAdress(newAdress);
    };

    changeAdress();
  }, [sale, sale.saleDate]);

  return (
    <Link to={ `/seller/orders/${sale.id}` }>

      <section>
        <p
          data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
        >
          {sale.status}

        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${sale.id}` }
        >
          {saleDate}

        </p>
        <p
          data-testid={ `seller_orders__element-order-id-${sale.id}` }
        >
          {sale.id}

        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${sale.id}` }
        >
          {formatPrice(sale.totalPrice)}

        </p>

        <p
          data-testid={ `seller_orders__element-card-address-${sale.id}` }
        >
          {saleAddress}

        </p>

      </section>
    </Link>
  );
}

export default SellerSaleCard;

SellerSaleCard.propTypes = {
  sale: propTypes.shape({
    id: propTypes.number,
    saleDate: propTypes.string,
    status: propTypes.string,
    totalPrice: propTypes.number,
  }).isRequired,
};

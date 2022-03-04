import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { formatDate, formatSaleNumber, formatSellerName } from './utils/functions';

function SaleDetail(props) {
  const [sellerName, setSellerName] = useState('');
  const [dateFormated, setDateFormatted] = useState('');
  const { sale } = props;
  const order = formatSaleNumber(sale.id);

  useEffect(() => {
    const getSellerName = async () => {
      const seller = await formatSellerName(sale.sellerId);
      setSellerName(seller);
    };
    getSellerName();
  }, [sale.sellerId]);

  useEffect(() => {
    const getDateFormated = async () => {
      const newDate = await formatDate(sale.saleDate);
      setDateFormatted(newDate);
    };
    getDateFormated();
  }, [sale.saleDate, sale.sellerId]);

  return (
    <div>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-order-id-${sale.id}`
        }
      >
        {order}
      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-seller-name-${sale.id}`
        }
      >
        {sellerName}

      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-order-date-${sale.id}`
        }
      >
        {dateFormated}

      </p>
      <p
        data-testid={
          `customer_order_details__element-order-details-label-delivery-status-${sale.id}`
        }
      >
        {sale.status}

      </p>
      <button
        type="button"
        data-testid={ `customer_order_details__button-delivery-check-${sale.id}` }
      >
        Marcar como entregue

      </button>

    </div>
  );
}

export default SaleDetail;

SaleDetail.propTypes = {
  sale: propTypes.shape({
    id: propTypes.number,
    sellerId: propTypes.number,
    saleDate: propTypes.string,
    status: propTypes.string,
  }).isRequired,
};

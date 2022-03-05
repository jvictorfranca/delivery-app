import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { formatDate, formatSaleNumber, formatSellerName } from './utils/functions';
import { putSalesStatusBackEndRequest } from '../../utils/requests';

function SaleDetail(props) {
  const [sellerName, setSellerName] = useState('');
  const [dateFormated, setDateFormatted] = useState('');
  const { sale } = props;
  const [saleStatus, setSaleStatus] = useState(sale.status);
  const order = formatSaleNumber(sale.id);
  const user = JSON.stringify(localStorage.user);

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

  const buttonChangeStatus = () => {
    putSalesStatusBackEndRequest(`sales/${sale.id}`, 'Entregue', user.token);
    setSaleStatus('Entregue');
  };

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
        {saleStatus}

      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ buttonChangeStatus }
        disabled={ saleStatus !== 'Em Trânsito' }
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

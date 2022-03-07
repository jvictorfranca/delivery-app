import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { formatDate, formatSaleNumber } from './utils/functions';
import { putSalesStatusBackEndRequest } from '../../utils/requests';

function SaleDetail(props) {
  const [dateFormated, setDateFormatted] = useState('');
  const { sale } = props;
  const [saleStatus, setSaleStatus] = useState(sale.status);
  const order = formatSaleNumber(sale.id);
  const user = JSON.stringify(localStorage.user);

  useEffect(() => {
    const getDateFormated = async () => {
      const newDate = await formatDate(sale.saleDate);
      setDateFormatted(newDate);
    };
    getDateFormated();
  }, [sale.saleDate, sale.sellerId]);

  const buttonPrepareStatus = () => {
    putSalesStatusBackEndRequest(`/sales/${sale.id}`, 'Preparando', user.token);
    setSaleStatus('Preparando');
  };

  const buttonDeliveringStatus = () => {
    putSalesStatusBackEndRequest(`/sales/${sale.id}`, 'Em Trânsito', user.token);
    setSaleStatus('Entregue');
  };

  return (
    <div>
      <p
        data-testid={
          `seller_order_details__element-order-details-label-order-id-${sale.id}`
        }
      >
        {order}
      </p>
      <p
        data-testid={
          `seller_order_details__element-order-details-label-order-date-${sale.id}`
        }
      >
        {dateFormated}

      </p>
      <p
        data-testid={
          `seller_order_details__element-order-details-label-delivery-status-${sale.id}`
        }
      >
        {saleStatus}

      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ buttonPrepareStatus }
        disabled={ saleStatus !== 'Pendente' }
      >
        PREPARAR PEDIDO

      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ buttonDeliveringStatus }
        disabled={ saleStatus !== 'Preparando' }
      >
        SAIU PARA A ENTREGA

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

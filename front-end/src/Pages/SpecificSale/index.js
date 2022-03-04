import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SaleDetail from '../../Components/SaleDetail';
import SaleItem from '../../Components/SaleItem';
import UserHeader from '../../Components/UserHeader';
import { formatPrice } from '../../utils/format';
import { getBackEndRequest } from '../../utils/requests';

function SpecificSale() {
  const params = useParams();
  const { id } = params;
  const user = JSON.parse(localStorage.user);
  const [pageSale, setPageSale] = useState();
  useEffect(() => {
    const fetchSale = async () => {
      const sale = await getBackEndRequest(`/sales/sale/${id}`);
      setPageSale(sale);
    };
    fetchSale();
  }, [id]);

  return (
    !pageSale ? 'Loading...' : (
      <main>
        <UserHeader user={ user } />
        <SaleDetail sale={ pageSale } />
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descricao</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>

            {pageSale.products.map((product, index) => (<SaleItem
              key={ product.id }
              product={ product }
              index={ index }
            />))}
          </tbody>

        </table>
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${formatPrice(pageSale.totalPrice)}`}

        </p>
      </main>
    )
  );
}

export default SpecificSale;

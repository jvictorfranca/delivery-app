import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SellerSaleDetail from '../../Components/SellerSaleDetail';
import SellerSaleItem from '../../Components/SellerSaleItem';
import SellerHeader from '../../Components/SellerHeader';
import { formatPrice } from '../../utils/format';
import { getBackEndRequest } from '../../utils/requests';

function SpecificSellerSale() {
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
        <SellerHeader user={ user } />
        <SellerSaleDetail sale={ pageSale } />
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

            {pageSale.products.map((product, index) => (<SellerSaleItem
              key={ product.id }
              product={ product }
              index={ index }
            />))}
          </tbody>

        </table>
        <p
          data-testid="seller_order_details__element-order-total-price"
        >
          {`Total: ${formatPrice(pageSale.totalPrice)}`}

        </p>
      </main>
    )
  );
}

export default SpecificSellerSale;

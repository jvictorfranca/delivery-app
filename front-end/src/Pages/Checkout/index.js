import React, { useContext } from 'react';
import UserCheckoutItem from '../../Components/UserCheckoutItem';
import cartContext from '../../Context/cartContext';
import { formatPrice } from '../../utils/format';

function Checkout() {
  const { cart, totalPrice } = useContext(cartContext);
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descricao</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>

          {cart.map((product, index) => (<UserCheckoutItem
            key={ product.id }
            product={ product }
            index={ index }
          />))}
        </tbody>

      </table>
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: ${formatPrice(totalPrice)}`}

      </p>
    </main>
  );
}

export default Checkout;

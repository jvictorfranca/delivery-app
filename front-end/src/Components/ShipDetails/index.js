import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cartContext from '../../Context/cartContext';
import { postSalesBackEndRequest } from '../../utils/requests';

import SellerSelect from '../SellerSelect';

function ShipDetails() {
  const { cart, totalPrice } = useContext(cartContext);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [selectedSellerId, setSelected] = useState();
  const user = JSON.parse(localStorage.user);
  const history = useHistory();
  const finishSaleObj = {
    userId: user.id,
    sellerId: selectedSellerId,
    totalPrice,
    deliveryAddress: address,
    deliveryNumber: number,
    saleDate: new Date(),
    products: cart,

  };

  const finishSale = async () => {
    const answer = await postSalesBackEndRequest('/sales', finishSaleObj, user.token);
    history.push(`/customer/orders/${answer.id}`);
  };
  return (
    <form>
      <SellerSelect setSelectedParent={ setSelected } />
      <label htmlFor="address">
        Endereço
        <input
          type="text"
          name="address"
          id="address"
          value={ address }
          onChange={ (e) => { setAddress(e.target.value); } }
          data-testid="customer_checkout__input-address"
        />
      </label>

      <label htmlFor="number">
        Número
        <input
          type="text"
          name="number"
          id="number"
          value={ number }
          onChange={ (e) => { setNumber(e.target.value); } }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        type="button"
        onClick={ finishSale }
        onSubmit={ finishSale }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar pedido

      </button>
    </form>
  );
}

export default ShipDetails;

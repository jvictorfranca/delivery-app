import React from 'react';
import SellerSelect from '../SellerSelect';

function ShipDetails() {
  return (
    <form action="GET">
      <SellerSelect />
      <label htmlFor="address">
        Endereço
        <input type="text" name="address" id="address" />
      </label>

      <label htmlFor="address">
        Número
        <input type="text" name="number" id="number" />
      </label>

    </form>
  );
}

export default ShipDetails;

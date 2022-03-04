import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { backendUrl } from '../../URLs';

function SellerSelect(props) {
  const { setSelectedParent } = props;
  const [selected, setSelected] = useState('');
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const fetchSellers = async () => {
      const newSellers = await fetch(`${backendUrl}/users/sellers`);
      const answer = await newSellers.json();
      await setSellers(answer);
      await setSelectedParent(answer[0].id);
    };
    fetchSellers();
  }, [setSelectedParent]);
  useEffect(() => {
    setSelectedParent(selected);
  }, [selected, setSelectedParent]);

  const handleSelectChanges = (e) => {
    setSelected(e.target.value);
  };
  return (
    <label htmlFor="sellerSelect">
      P. Vendedora Responsável:
      <select
        name="sellerSelect"
        id="sellerSelect"
        onChange={ handleSelectChanges }
        data-testid="customer_checkout__select-seller"
      >
        {sellers.map(
          (seller) => (
            <option
              key={ seller.id }
              value={ seller.id }
            >
              {seller.name}
            </option>),
        )}
      </select>
    </label>
  );
}

export default SellerSelect;

SellerSelect.propTypes = {

  setSelectedParent: propTypes.func.isRequired,

};

import React, { useEffect, useState } from 'react';
import { backendUrl } from '../../URLs';

function SellerSelect() {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const fetchSellers = async () => {
      let newSellers = await fetch(`${backendUrl}/users`);
      newSellers = newSellers.filter((user) => user.role === 'seller');
      await setSellers(newSellers);
    };
    fetchSellers();
  }, []);
  console.log(sellers);
  return (
    <label htmlFor="sellerSelect">
      P. Vendedora Responsável:
      <select name="sellerSelect" id="sellerSelect">
        <option value="hello">hello</option>
      </select>
    </label>
  );
}

export default SellerSelect;

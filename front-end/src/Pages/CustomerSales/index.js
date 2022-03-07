import React, { useEffect, useState } from 'react';
import UserHeader from '../../Components/UserHeader';
import UserSaleCard from '../../Components/UserSaleCard';
import { getBackEndRequest } from '../../utils/requests';

function CustomerSales() {
  const [sales, setSales] = useState([]);
  const user = JSON.parse(localStorage.user);
  useEffect(() => {
    const setTheSales = async () => {
      const salesToSet = await getBackEndRequest(`/sales/customer/${user.id}`);
      setSales(salesToSet);
    };
    setTheSales();
  }, [user.id]);
  console.log(sales);
  return (
    <main>
      <UserHeader user={ user } />
      {sales.length === 0 ? 'Loading...' : sales.map((sale) => (
        <UserSaleCard sale={ sale } key={ sale.id } />))}
    </main>
  );
}

export default CustomerSales;

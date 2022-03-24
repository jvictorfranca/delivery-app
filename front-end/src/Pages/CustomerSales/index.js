import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import UserHeader from '../../Components/UserHeader';
import UserSaleCard from '../../Components/UserSaleCard';
import { getBackEndRequest } from '../../utils/requests';

const socket = io.connect('http://localhost:5001');

function CustomerSales() {
  const [sales, setSales] = useState([]);
  const user = JSON.parse(localStorage.user);
  useEffect(() => {
    const setTheSales = async () => {
      const salesToSet = await getBackEndRequest(`/sales/customer/${user.id}`);
      salesToSet.sort(((a, b) => a.id - b.id));
      setSales(salesToSet);
    };
    setTheSales();
  }, [user.id]);
  socket.on('changeStatus', (status) => {
    if (sales.map((sale) => sale.id).includes(parseInt(status.id, 10))) {
      const foundSale = sales.find((sale) => sale.id === parseInt(status.id, 10));
      foundSale.status = status.status;
      const newSales = [
        ...sales.filter((sale) => sale.id !== parseInt(status.id, 10)), foundSale,
      ];
      newSales.sort(((a, b) => a.id - b.id));
      setSales(newSales);
    }
  });
  return (
    <main>
      <UserHeader user={ user } />
      {sales.length === 0 ? 'Loading...' : sales.map((sale) => (
        <UserSaleCard sale={ sale } key={ sale.id } />))}
    </main>
  );
}

export default CustomerSales;

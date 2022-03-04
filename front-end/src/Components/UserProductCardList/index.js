import React, { useEffect, useState } from 'react';
import { getBackEndRequest } from '../../utils/requests';
import UserProductCard from '../UserProductCard';
import './UserProductCardList.css';

function UserProductCardList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getBackEndRequest('/products');
      setProducts(productsList);
    };
    fetchData();
  }, []);
  return (
    <main className="class-list">
      {products.length === 0 ? <p>Loading...</p>
        : products.map((product) => (
          <UserProductCard
            key={ product.id }
            product={ product }
          />))}
    </main>
  );
}

export default UserProductCardList;

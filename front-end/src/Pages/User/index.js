import React from 'react';
import CartButton from '../../Components/CartButton';
import UserProductCardList from '../../Components/UserProductCardList';

function UserPage() {
  return (
    <main>
      <UserProductCardList />
      <CartButton />
    </main>
  );
}

export default UserPage;

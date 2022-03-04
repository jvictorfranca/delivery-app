import React from 'react';
import CartButton from '../../Components/CartButton';
import UserHeader from '../../Components/UserHeader';
import UserProductCardList from '../../Components/UserProductCardList';

function UserPage() {
  const { user } = localStorage;
  const userOBJ = JSON.parse(user);
  return (
    <main>
      <UserHeader user={ userOBJ } />
      <UserProductCardList />
      <CartButton />
    </main>
  );
}

export default UserPage;

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

function UserHeader({ user }) {
  const history = useHistory();
  return (
    <nav>
      <Link
        to="/customer/products"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos

      </Link>

      <Link
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos

      </Link>

      <button
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/login');
        } }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </button>

      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </div>
    </nav>
  );
}

UserHeader.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired }).isRequired,
};

export default UserHeader;

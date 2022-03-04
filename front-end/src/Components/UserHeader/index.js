import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function UserHeader({ user }) {
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

      <Link
        to="/login"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </Link>

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

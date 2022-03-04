import React from 'react';
import propTypes from 'prop-types';
import ButtonsAndQuantity from '../UserProductCardList/ButtonsAndQuantity';
import './UserProductCard.css';
import { formatPrice } from '../../utils/format';

function UserProductCard({ product }) {
  return (
    <section className="user-product-card">

      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
      >
        {product.name}

      </p>
      <img
        src={ product.urlImage }
        alt="product"
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        {formatPrice(product.price)}

      </p>
      <ButtonsAndQuantity product={ product } />

    </section>
  );
}

export default UserProductCard;

UserProductCard.propTypes = {
  product: propTypes.shape({
    name: propTypes.string,
    urlImage: propTypes.string,
    price: propTypes.number,
    id: propTypes.number,
  }).isRequired,
};

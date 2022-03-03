import React from 'react';
import propTypes from 'prop-types';
import ButtonsAndQuantity from '../UserProductCardList/ButtonsAndQuantity';
import './UserProductCard.css';
import { formatPrice } from '../../utils/format';

function UserProductCard({ product }) {
  return (
    <section className="user-product-card">

      <p
        data-testid="customer_products__element-card-title-"
      >
        {product.name}

      </p>
      <img
        src={ product.urlImage }
        alt="product"
        data-testid="customer_products__img-card-bg-image-"
      />
      <p
        data-testid="customer_products__element-card-price-"
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
    name: propTypes.string.isRequired,
    urlImage: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
  }).isRequired,
};

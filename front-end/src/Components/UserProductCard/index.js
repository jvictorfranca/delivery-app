import React from 'react';
import propTypes from 'prop-types';
import ButtonsAndQuantity from '../UserProductCardList/ButtonsAndQuantity';

function UserProductCard({ product }) {
  return (
    <section>

      <p>{product.name}</p>
      <img src={ product.urlImage } alt="product" />
      <ButtonsAndQuantity product={ product } />

    </section>
  );
}

export default UserProductCard;

UserProductCard.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    urlImage: propTypes.string.isRequired,
  }).isRequired,
};

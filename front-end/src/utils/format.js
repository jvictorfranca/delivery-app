export const formatPrice = (price) => `R$ ${
  parseFloat(price).toFixed(2).replace('.', ',')}`;
export default formatPrice;

const NAME_REQUIRED_MESSAGE = 'Name is required';
const NAME_NOT_EMPTY_MESSAGE = 'Name cannot be empty';
const PRICE_REQUIRED_MESSAGE = 'Price is required';
const URL_REQUIRED_MESSAGE = 'UrlImage is required';
const URL_NOT_EMPTY_MESSAGE = 'UrlImage cannot be empty';
const PRICE_NOT_NEGATIVE_MESSAGE = 'Price cannot be negative';

const isNameInvalid = (name) => {
  if (name === undefined) { return NAME_REQUIRED_MESSAGE; }
  if (name.length < 1) { return NAME_NOT_EMPTY_MESSAGE; }
  return false;
};

const isPriceInvalid = (price) => {
  if (!price) { return PRICE_REQUIRED_MESSAGE; }
  if (price < 0) { return PRICE_NOT_NEGATIVE_MESSAGE; }
  return false;
};

const isURLInvalid = (url) => {
  if (url === undefined) { return URL_REQUIRED_MESSAGE; }
  if (url.length < 1) { return URL_NOT_EMPTY_MESSAGE; }
  return false;
};

const isProductBodyInvalid = (productOBJ) => {
  if (!productOBJ) { return 'Body is required'; }
  if (isNameInvalid(productOBJ.name)) {
 return isNameInvalid(productOBJ.name);
  }
  if (isPriceInvalid(productOBJ.price)) { return isPriceInvalid(productOBJ.price); }
  if (isURLInvalid(productOBJ.urlImage)) { return isURLInvalid(productOBJ.urlImage); }
  return false;
};

module.exports = {
  isProductBodyInvalid,
};
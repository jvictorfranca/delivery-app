import getSellerNameWithId from './requests';

const PEDIDO_LENGTH = 4;
const DATE_LENGTH = 2;

export const formatSaleNumber = (saleId) => {
  let string = `${saleId}`;
  while (string.length < PEDIDO_LENGTH) {
    string = `0${string}`;
  }
  string = `PEDIDO ${string}`;
  return string;
};

export const formatSellerName = async (sellerId) => {
  const sellerName = await getSellerNameWithId(sellerId);
  return `P. Vend:${sellerName}`;
};

export const formatDateNumber = (number) => {
  let string = `${number}`;
  while (string.length < DATE_LENGTH) {
    string = `0${string}`;
  }
  return string;
};

export const formatDate = async (date) => {
  const getDate = new Date(date);
  const day = getDate.getDay();
  const month = getDate.getMonth() + 1;
  const year = getDate.getFullYear();
  const formattedDay = formatDateNumber(day);
  const formattedMonth = formatDateNumber(month);

  return `${formattedDay}/${formattedMonth}/${year}`;
};

export default formatSaleNumber;

const { Sale, Product } = require('../../database/models');

const getAllSalesService = async () => {
  const sales = await Sale.findAll(
    { include: [
          { model: Product, as: 'products', through: { attributes: ['quantity'] } },
        ] },
);
  return { status: 200, answer: sales };
};

const getAllSalesByCustomerService = async (id) => {
  const sales = await Sale.findAll(
    { where: { userId: id },
include: [
          { model: Product, as: 'products', through: { attributes: ['quantity'] } },
        ] },
);
  return { status: 200, answer: sales };
};

const getAllSalesBySellerService = async (id) => {
  const sales = await Sale.findAll(
    { where: { sellerId: id },
include: [
          { model: Product, as: 'products', through: { attributes: ['quantity'] } },
        ] },
);
  return { status: 200, answer: sales };
};

module.exports = {
  getAllSalesService,
  getAllSalesByCustomerService,
  getAllSalesBySellerService,
};
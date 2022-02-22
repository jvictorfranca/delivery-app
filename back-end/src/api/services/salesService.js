const { Sale, Product } = require('../../database/models');

const getAllSalesService = async () => {
  const sales = await Sale.findAll(
    { include: [
          { model: Product, as: 'products', through: { attributes: ['quantity'] } },
        ] },
);
  return { status: 200, answer: sales };
};

module.exports = {
  getAllSalesService,
};
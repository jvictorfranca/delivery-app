const Joi = require('joi');
const { Sale, Product, SalesProduct } = require('../../database/models');

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

const updateSaleStatusByIdService = async (id, status) => {
  await Sale.update({ status,
  }, { where: { id } });

  const updatedSale = await Sale.findOne({ where: { id } });
  return { status: 200, answer: updatedSale };
};

const salesProductSchema = Joi.object({
  saleId: Joi.number().required(),
  productId: Joi.number().required(),
  quantity: Joi.number().required(),
});

const saleSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date().required(),
  products: Joi.required(),
});

const createSalesProductObj = (bodyObj, saleId) => {
  const objToReturn = {
    saleId,
    productId: bodyObj.id,
    quantity: bodyObj.SalesProduct.quantity,
  };
 
  const { error } = salesProductSchema.validate(objToReturn);
  if (error) {
    const err = { status: 400, message: error.message };
    throw (err);
  }
  return objToReturn;
};

const createBulkNewSalesProduct = async (arrayProducts, saleId) => {
  const array = [];
  for (let i = 0; i < arrayProducts.length; i += 1) {
    const obj = createSalesProductObj(arrayProducts[i], saleId);
    array.push(obj);
  }
  const created = await SalesProduct.bulkCreate(array);
  return created;
};

const createNewSaleService = async (body) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate } = body;

  const { error } = saleSchema.validate(body);
  if (error) { 
    const err = { status: 400, message: error.message };
    throw (err);
  }

  const created = await Sale.create({
    userId, 
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status: 'Pendente',
  });

  await createBulkNewSalesProduct(body.products, created.dataValues.id);

  return (created);
};

module.exports = {
  getAllSalesService,
  getAllSalesByCustomerService,
  getAllSalesBySellerService,
  updateSaleStatusByIdService,
  createNewSaleService,
};
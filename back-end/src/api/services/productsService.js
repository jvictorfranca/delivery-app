const Joi = require('joi');
const { Product } = require('../../database/models');

const getAllProductsService = async () => {
  const products = await Product.findAll(
    { },
);
  return { status: 200, answer: products };
};

const getProductByIdService = async (id) => {
  const product = await Product.findAll(
    { where: { id } },
);
  return { status: 200, answer: product };
};

const getProductByNameService = async (name) => {
  const product = await Product.findOne(
    { where: { name } },
);
  return { status: 200, answer: product };
};

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  urlImage: Joi.string().uri().required(),
});

const postProductService = async (productOBJ) => {
  const { error } = productSchema.validate(productOBJ);
  if (error) {
    const err = { status: 400, message: error.message };
    throw (err);
    }
  const alreadyRegistered = await getProductByNameService(productOBJ.name);
  if (alreadyRegistered.answer) {
    return { status: 400,
    answer: { message: 'Product already exists' } }; 
  }
  const productToCreate = {
    name: productOBJ.name,
    price: productOBJ.price,
    urlImage: productOBJ.urlImage,
  };
  const product = await Product.create(productToCreate);
  return { status: 201, answer: product };
};

module.exports = {
  getAllProductsService,
  getProductByIdService,
  postProductService,
};
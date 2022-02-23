const { Product } = require('../../database/models');
const { isProductBodyInvalid } = require('./utils/validate');

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

const postProductService = async (productOBJ) => {
  const isInvalid = isProductBodyInvalid(productOBJ);
  if (isInvalid) { return { status: 400, answer: { message: isInvalid } }; }
  const alreadyRegistered = await getProductByNameService(productOBJ.name);
  console.log(alreadyRegistered);
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
const Joi = require('joi');
const { product } = require('../../database/models');

const getAllProductsService = async () => {
  const products = await product.findAll(
    { },
);
  return { status: 200, answer: products };
};

const getProductByIdService = async (id) => {
  const productAnswer = await product.findAll(
    { where: { id } },
);
  return { status: 200, answer: productAnswer };
};

const getProductByNameService = async (name) => {
  const productAnswer = await product.findOne(
    { where: { name } },
);
  return { status: 200, answer: productAnswer };
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
  const productAnswer = await product.create(productToCreate);
  return { status: 201, answer: productAnswer };
};

const uploadImageService = async (id, imagePath) => {
  let { answer } = await getProductByIdService(id);
  answer = { ...answer, image: imagePath };
  
    await product.update(id, imagePath); 
    await product.update({ urlImage: imagePath }, { where: { id } });
    return { answer, status: 200 };
  };

module.exports = {
  getAllProductsService,
  getProductByIdService,
  postProductService,
  uploadImageService,
};
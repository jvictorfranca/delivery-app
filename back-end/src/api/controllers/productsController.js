const { 
  getAllProductsService,
  getProductByIdService,
  postProductService,
} = require('../services/productsService');

const getAllProductsController = async (req, res, next) => {
  try {
    const answer = await getAllProductsService();
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const getProductByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = await getProductByIdService(id);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const postProductController = async (req, res, next) => {
  try {
    const productOBJ = req.body;
    const answer = await postProductService(productOBJ);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  postProductController,
};
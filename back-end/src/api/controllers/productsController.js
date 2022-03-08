const { 
  getAllProductsService,
  getProductByIdService,
  postProductService,
  uploadImageService,
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

const uploadImageController = async (req, res, next) => {
  try {
 const { id } = req.params;
  const imagePath = `localhost:3000/src/uploads/${id}.jpeg`;
  const answerObject = await uploadImageService( 
    id, req.tokenData, imagePath,
    );
  return res.status(answerObject.status).json(answerObject.answer);
} catch (err) {
  console.error(err.answer.message);
  next(err);
}
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  postProductController,
  uploadImageController,
};
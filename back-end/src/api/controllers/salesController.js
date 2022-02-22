const {
   getAllSalesService,
   getAllSalesByCustomerService,
   getAllSalesBySellerService,
  } = require('../services/salesService');

const getAllSalesController = async (req, res, next) => {
  try {
    const answer = await getAllSalesService();
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const getAllSalesByCustomerController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = await getAllSalesByCustomerService(id);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const getAllSalesBySellerController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = await getAllSalesBySellerService(id);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSalesController,
  getAllSalesByCustomerController,
  getAllSalesBySellerController,
};
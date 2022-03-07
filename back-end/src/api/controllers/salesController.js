const {
   getAllSalesService,
   getAllSalesByCustomerService,
   getAllSalesBySellerService,
   updateSaleStatusByIdService,
   createNewSaleService,
   getSalesByIdService,
  } = require('../services/salesService');

const getAllSalesController = async (req, res, next) => {
  try {
    const answer = await getAllSalesService();
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const getSaleByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = await getSalesByIdService(id);
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

const updateSaleStatusByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const answer = await updateSaleStatusByIdService(id, status);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const createNewSaleController = async (req, res, next) => {
  try {
    const created = await createNewSaleService(req.body);
    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSalesController,
  getAllSalesByCustomerController,
  getAllSalesBySellerController,
  updateSaleStatusByIdController,
  createNewSaleController,
  getSaleByIdController,
};
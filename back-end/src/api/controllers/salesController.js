const { getAllSalesService } = require('../services/salesService');

const getAllSalesController = async (req, res, next) => {
  try {
    const answer = await getAllSalesService();
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSalesController,
};
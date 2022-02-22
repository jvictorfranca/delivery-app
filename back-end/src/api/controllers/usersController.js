const { getAllUsersService, getUserByIdService } = require('../services/usersService');

const getAllUsersController = async (req, res, next) => {
  try {
    const answer = await getAllUsersService();
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

const getUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const answer = await getUserByIdService(id);
    res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsersController,
  getUserByIdController,
};
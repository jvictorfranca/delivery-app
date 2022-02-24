const {
   getAllUsersService,
   getUserByIdService,
   userLoginService,
  } = require('../services/usersService');

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

const userLoginController = async (req, res, next) => {
  try {
    const user = req.body;
    const { email, password } = user;
    
    const answer = await userLoginService(email, password);
    
    return res.status(answer.status).json(answer.answer);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsersController,
  getUserByIdController,
  userLoginController,
};
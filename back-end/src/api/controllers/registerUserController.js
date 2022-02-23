const newUserService = require('../services/registerUserService');

const newUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await newUserService(name, email, password);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = newUserController;
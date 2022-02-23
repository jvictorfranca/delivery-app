const newUserService = require('../services/admimUserService');

const newUserController = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await newUserService(name, email, password, role);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = newUserController;
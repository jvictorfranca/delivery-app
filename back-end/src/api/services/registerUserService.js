const Joi = require('joi');
const { User } = require('../../database/models');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const newUserService = async (name, email, password) => {
  const { error } = userSchema.validate({ name, email, password });
  if (error) {
    const err = { status: 400, message: error.message };
    throw (err);
  }

  const ifAlreadyExist = await User.findOne({ where: { email } });
  if (ifAlreadyExist) {
    const err = { status: 409, message: 'User already exist' };
    throw (err);
  }

  const insert = await User.create({ name, email, password, role: 'customer' });
  return insert;
};

module.exports = newUserService;
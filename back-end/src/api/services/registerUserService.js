const Joi = require('joi');
const { user } = require('../../database/models');
const hash = require('./utils/hashUnhash');

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

  const ifAlreadyExist = await user.findOne({ where: { email } });
  if (ifAlreadyExist) {
    const err = { status: 409, message: 'User already exist' };
    throw (err);
  }

  const passwordhashed = hash(password);

  const insert = await user.create({ name, email, password: passwordhashed, role: 'customer' });
  return insert;
};

module.exports = newUserService;
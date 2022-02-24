const Joi = require('joi');
const { User } = require('../../database/models');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const admimUserService = async (name, email, password, role) => {
  const { error } = userSchema.validate({ name, email, password, role });
  if (error) {
    const err = { status: 400, message: error.message };
    throw (err);
  }

  const ifAlreadyExist = await User.findOne({ where: { email } });
  if (ifAlreadyExist) {
    const err = { status: 409, message: 'User already exist' };
    throw (err);
  }

  const insert = await User.create({ name, email, password, role });
  return insert;
};

module.exports = admimUserService;
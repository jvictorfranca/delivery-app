const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../../database/models');
const hash = require('./utils/hashUnhash');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

const getAllUsersService = async () => {
  const users = await User.findAll(
    { },
);
  return { status: 200, answer: users };
};

const getUserByIdService = async (id) => {
  const users = await User.findAll(
    { where: { id } },
);
  return { status: 200, answer: users };
};

const userLoginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });
    
  if (!user) return { status: 400, answer: 'bad request' };
  
  const verifyPassword = hash(password);
  
  if (verifyPassword !== user.password) return { status: 400, answer: 'bad request' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  return { status: 200, answer: token };
};

module.exports = {
  getAllUsersService,
  getUserByIdService,
  userLoginService,
};
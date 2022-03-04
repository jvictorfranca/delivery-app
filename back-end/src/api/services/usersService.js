const jwt = require('jsonwebtoken');
const fs = require('fs');
const { user } = require('../../database/models');
const hash = require('./utils/hashUnhash');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

const getAllUsersService = async () => {
  const users = await user.findAll(
    { },
);
  return { status: 200, answer: users };
};

const getUserByIdService = async (id) => {
  const users = await user.findAll(
    { where: { id } },
);
  return { status: 200, answer: users };
};

const userLoginService = async (email, password) => {
  const userAnswer = await user.findOne({ where: { email } });
    
  if (!userAnswer) return { hasToken: false, status: 404, answer: 'not found' };
  
  const verifyPassword = hash(password);
  
  if (verifyPassword !== userAnswer.password) return { status: 400, answer: 'bad request' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: email }, secret, jwtConfig);

  const userToReturn = {
    name: userAnswer.name,
    id: userAnswer.id,
    email: userAnswer.email,
    role: userAnswer.role,
    token,
  };

  return { status: 200, answer: userToReturn };
};

module.exports = {
  getAllUsersService,
  getUserByIdService,
  userLoginService,
};
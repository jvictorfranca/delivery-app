const { User } = require('../../database/models');

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

module.exports = {
  getAllUsersService,
  getUserByIdService,
};
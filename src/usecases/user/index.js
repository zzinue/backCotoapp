const User = require("../../models/user").model;
const encrypt = require("../../lib/encrypt");

const getById = async (id) => {
  return await User.findById(id).exec();
};

const getByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};

const authenticate = async (user, password) => {
  hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};

const create = async (firstName, lastName, email, password) => {
  const hash = await encrypt.hashPassword(password);

  const user = new User({ firstName, lastName, email, password: hash });

  return await user.save();
};

module.exports = {
  getById,
  create,
  getByEmail,
  authenticate,
};

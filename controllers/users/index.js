const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const getUsers = require("./getUsers");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const isCorrectResizedImage = require("./isCorrectResizedImage");
const deleteUserByMail = require("./deleteUserByMail");
const verifyUserByToken = require("./verifyUserByToken");
const resendVerificationMail = require("./resendVerificationMail");

module.exports = {
  register,
  login,
  current,
  logout,
  getUsers,
  updateSubscription,
  updateAvatar,
  isCorrectResizedImage,
  deleteUserByMail,
  verifyUserByToken,
  resendVerificationMail,
};

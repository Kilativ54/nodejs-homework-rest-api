const { userValidator } = require("../../utils/validators/validator");
const service = require("../../service/users");
const jwt = require("jsonwebtoken");
const User = require("../../service/schemas/user");
require("dotenv").config();

const getUsers = async (req, res, next) => {
    const { email } = req.user;
    res.json({
      status: "success",
      code: 200,
      data: {
        message: `Authorization was successful: ${email}`,
      },
    });
  };

  module.exports = getUsers;
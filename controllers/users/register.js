const { userValidator } = require("../../utils/validators/validator");
const service = require("../../service/users");
const jwt = require("jsonwebtoken");
const User = require("../../service/schemas/user");
require("dotenv").config();

const secret = process.env.SECRET;

const register = async (req, res, next) => {
    const { error } = userValidator(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    const { email, password, subscription } = req.body;
    const user = await service.getUser({ email });
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Email in use",
        data: "Conflict",
      });
    }
    try {
      const newUser = new User({ email, password, subscription });
      newUser.setPassword(password);
      await newUser.save();
      res.status(201).json({
        user: {
          email,
          subscription,
        },
      });
    } catch (error) {
      next(error);
    }
  };

  module.exports = register;
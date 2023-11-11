const { userValidator } = require("../../utils/validators/validator");
const service = require("../../service/users");
const jwt = require("jsonwebtoken");
const User = require("../../service/schemas/user");
require("dotenv").config();

const logout = async (req, res, next) => {
    try {
      const user = await service.getUser({ _id: req.user._id });
      if (!user) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        user.setToken(null);
        await user.save();
        res.json({
          status: "success",
          code: 204,
          data: {
            message: "No Content",
          },
        });
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = logout;
const { userValidator } = require("../../utils/validators/validator");
const service = require("../../service/users");
const User = require("../../service/schemas/user");
require("dotenv").config();
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  const { error } = userValidator(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { email, password, subscription } = req.body;
  const user = await service.getUser({ email });

  if (user) {
    return res.status(409).json({
      status: "error",
      code: 409,
      message: "Email is already in use",
      data: "Conflict",
    });
  }
  try {
    const avatarURL = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    const newUser = new User({ email, password, subscription, avatarURL });
    newUser.setPassword(password);
    await newUser.save();
    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;

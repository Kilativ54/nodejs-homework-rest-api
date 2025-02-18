const service = require("../../service/users");
require("dotenv").config();

const current = async (req, res, next) => {
  try {
    const user = await service.getUser({ _id: req.user._id });
    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    } else {
      res.json({
        user: {
          email: user.email,
          subscription: user.subscription,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = current;

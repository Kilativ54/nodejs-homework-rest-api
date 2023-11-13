const { userValidator } = require("../../utils/validators/validator");
const service = require("../../service/users");
require("dotenv").config();

const updateSubscription = async (req, res, next) => {
  try {
    const { error } = userValidator(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    const { subscription } = req.body;
    const { userId } = req.params;

    if (!subscription) {
      res.status(400).json({ message: "missing field subscription" });
    }
    const user = await service.updateUserSubscription(userId, subscription);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = updateSubscription;

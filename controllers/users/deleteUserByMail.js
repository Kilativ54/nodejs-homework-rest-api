const service = require("../../service/users");
require("dotenv").config();

const deleteUserByMail = async (req, res) => {
  try {
    const email = req.query.email;
    const userToRemove = await service.deleteUser(email);
    if (!userToRemove) {
      return res.status(404).json({ message: "Not found user" });
    } else {
      res.status(200).json({ message: "User deleted from data base" });
    }
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

module.exports = deleteUserByMail;

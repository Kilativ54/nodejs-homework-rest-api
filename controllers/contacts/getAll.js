const service = require("../../service/contacts");

const getAll = async (req, res) => {
  const contacts = await service.getAllContacts();
  console.log("contacts: ", contacts);
  res.status(200).json(contacts);
};

module.exports = getAll;

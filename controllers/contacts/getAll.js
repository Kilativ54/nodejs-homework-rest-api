const service = require("../../service/contacts");

const getAll = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const start = (page - 1) * limit;
  const end = start + limit;
  const contacts = (await service.getContactsByQbe(req.query)).slice(
    start,
    end
  );
  res.status(200).json(contacts);
};

module.exports = getAll;

const service = require('../../service/contacts')
const { contactValidator } = require('../../utils/validators/validator')

const getById = async (req, res) => {
	const { contactId } = req.params
	const contact = await service.getContactById(contactId)
	if (contact) {
		res.status(200).json(contact)
	} else {
		res.status(404).json({ message: 'Not found' })
	}
}

module.exports = getById;

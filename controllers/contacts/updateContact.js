const service = require('../../service/contacts')
const { contactValidator } = require('../../utils/validators/validator')

const updateContact = async (req, res, next) => {
	try {
		const { error } = contactValidator(req.body)
		if (error) return res.status(400).json({ message: error.details[0].message })
		const { name, email, phone } = req.body
		const { contactId } = req.params
		const fields = req.body
		if (!name && !email && !phone) {
			res.status(400).json({ message: 'missing fields' })
		}
		const contact = await service.updateContact(contactId, fields)

		if (contact) {
			res.status(200).json(contact)
		} else {
			res.status(404).json({ message: 'Not found' })
		}
	} catch (error) {
		console.error(error.message)
		next(error)
	}
}

module.exports = updateContact;
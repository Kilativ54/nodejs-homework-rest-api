const service = require('../../service/contacts')
const { contactValidator } = require('../../utils/validators/validator')


const removeContact = async (req, res, next) => {
	try {
		const { contactId } = req.params
		const contactToRemove = await service.deleteContact(contactId)
		if (!contactToRemove) {
			return res.status(404).json({ message: 'Not found contact' })
		} else {
			res.status(200).json({ message: 'Contact deleted' })
		}
	} catch (error) {
		console.log(`Error: ${error.message}`.red)
		next(error)
	}
}

module.exports = removeContact;
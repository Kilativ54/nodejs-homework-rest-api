const service = require('../../service/contacts')
const { contactValidator } = require('../../utils/validators/validator')

const setFavorite = async (req, res, next) => {
	try {
		const { error } = contactValidator(req.body)
		if (error) return res.status(400).json({ message: error.details[0].message })
		const { favorite } = req.body
		const { contactId } = req.params
		if (!favorite && favorite !== false) {
			res.status(400).json({ message: 'missing field favorite' })
		}
		const contact = await service.updateStatusContact(contactId, favorite)

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

module.exports = setFavorite;
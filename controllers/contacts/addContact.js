const service = require('../../service/contacts')
const { contactValidator } = require('../../utils/validators/validator')

const addContact = async (req, res, next) => {
	let { name, email, phone, favorite } = req.body
	if (!favorite) {
		favorite = false
	}
	try {
		const result = await service.createContact({ name, email, phone, favorite })
		res.status(201).json(result)
	} catch (e) {
		console.warn(e)
		next(e)
	}
}

module.exports = addContact;
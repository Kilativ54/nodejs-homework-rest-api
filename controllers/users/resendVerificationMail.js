const sendVerificationToken = require('../../utils/email/sgMail');
const service = require('../../service/users');
require('dotenv').config();


const resendVerificationMail = async (req, res) => {
	const { email } = req.body;
	if (!email) {
		res.status(400).json({ message: 'missing required field email' });
	}
	const user = await service.getUser({ email });

	if (!user) {
		return res.status(400).json({
			status: 'error',
			code: 400,
			message: 'Incorrect email ',
		});
	}
	if (user.validate) {
		return res.status(400).json({
			status: 'error',
			code: 400,
			message: 'Verification has already been passed',
		});
	}
	if (!user.validate) {
		sendVerificationToken(email, user.verificationToken);
		return res.status(400).json({
			status: 'error',
			code: 400,
			message: 'Verification has already been passed',
		});
	}
};

module.exports = resendVerificationMail;
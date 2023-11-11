const express = require('express')
const router = express.Router()
const userController = require('../controllers/users/index')
const { auth } = require('../middlewares/auth')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', auth, userController.logout)
router.get('/current', auth, userController.current)

module.exports = router
var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')
const checkAuth = require('../middleware/checkAuth')

/* GET users listing. */
router.get('/', checkAuth.isLogin, usersControllers.getAll)
router.post('/signup', usersControllers.signup)
router.post('/login', usersControllers.login)
router.put('/:id', checkAuth.isLogin, usersControllers.update)
router.delete('/:id', checkAuth.isLogin, usersControllers.remove)

module.exports = router;

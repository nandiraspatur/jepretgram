var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', usersControllers.getAll)
router.post('/signup', usersControllers.signup)
router.post('/login', usersControllers.login)
router.put('/:id', usersControllers.update)
router.delete('/:id', usersControllers.remove)

module.exports = router;

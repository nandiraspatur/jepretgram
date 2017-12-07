const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
const photosControllers = require('../controllers/photosControllers')
const checkAuth = require('../middleware/checkAuth')

/* GET home page. */
router.get('/', photosControllers.getAll);
router.post('/upload', checkAuth.isLogin, photosControllers.create)
// router.post('/upload', function (req, res, next) {
//   console.log(req)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
// })
router.put('/', checkAuth.isLogin, photosControllers.update);
router.delete('/', checkAuth.isLogin, photosControllers.remove);

module.exports = router;

const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
const photosControllers = require('../controllers/photosControllers')
const checkAuth = require('../middleware/checkAuth')

/* GET home page. */
router.get('/', photosControllers.getAll);
// router.post('/upload', checkAuth.isLogin, photosControllers.create)
router.post('/uploads', checkAuth.isLogin, upload.single('image'), photosControllers.create);
router.put('/', checkAuth.isLogin, photosControllers.update);
router.delete('/', checkAuth.isLogin, photosControllers.remove);

module.exports = router;

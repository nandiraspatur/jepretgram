const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
const photosControllers = require('../controllers/photosControllers')

/* GET home page. */
router.get('/',);
router.post('/upload', upload.single('photo'), photosControllers.upload);
router.put('/',);
router.delete('/',);

module.exports = router;

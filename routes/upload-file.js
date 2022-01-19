'use strict';

let express = require('express');
let router = express.Router();
let upload = require('../controllers/file-upload.controller');
let getFile = require('../controllers/files.controller')

router.post('/', upload);
router.get('/', getFile);

module.exports = router;
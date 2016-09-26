const express = require('express');
const router = express.Router();
const s3Api = require('./build/s3.js');

router.get('/sign-s3', s3Api.upload);
router.post('/save-details', s3Api.saveDetails);

module.exports = router;

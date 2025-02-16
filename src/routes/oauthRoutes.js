const express = require('express');
const { googleAuth } = require('../controllers/oauthController');

const router = express.Router();

router.post('/google', googleAuth);

module.exports = router;

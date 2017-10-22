'use strict';

const router = require('express').Router();

router.use('/api', require('./api/routes.js'));

module.exports = router;

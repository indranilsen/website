'use strict';

const router = require('express').Router();

router.use('/message', require('../../controllers/message.controller.js'));
router.use('/video', require('../../controllers/video.controller.js'));

module.exports = router;

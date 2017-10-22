'use strict';

const router = require('express').Router();

const VideoService = require('../services/message.service.js');

router.post('/video', (req, res, next) => {
    VideoService.collectVideos()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send(500);
        })
});

module.exports = router;

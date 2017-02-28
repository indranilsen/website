var express = require('express');

var videoService = require('../services/videoService')();
var videoController = require('../controllers/videoController')(videoService);

var apiRouter = express.Router();

apiRouter.route('/').get(function(req, res) {
    res.send('Api Base');
});

apiRouter.route('/video').get(videoController.getVideos);

module.exports = apiRouter;

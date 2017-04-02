var express = require('express');

var videoService = require('../services/videoService')();
var videoController = require('../controllers/videoController')(videoService);

var messageService = require('../services/messageService')();
var messageController = require('../controllers/messageController')(messageService);

var apiRouter = express.Router();

apiRouter.route('/').get(function(req, res) {
    res.send('Api Base');
});

apiRouter.route('/video').get(videoController.getVideos);
apiRouter.route('/message').post(messageController.sendMessage);

module.exports = apiRouter;

var videoController = function(videoService) {
    var video = function(req, res) {
        videoService.service();
        res.send('Video Controller');
    };

    return {
        video: video
    }
};

module.exports = videoController;

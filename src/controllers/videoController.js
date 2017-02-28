var videoController = function(videoService) {
    var getVideos = function(req, res) {
        videoService.service();
        res.send('Video Controller');
    };

    return {
        getVideos: getVideos
    }
};

module.exports = videoController;

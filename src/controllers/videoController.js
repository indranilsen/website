var videoController = function(videoService) {
    var getVideos = function(req, res) {
        let result = videoService.collectVideos();
        if(result) {
            res.send(result);
        } else {
            res.send('Video Controller');
        }
    };

    return {
        getVideos: getVideos
    }
};

module.exports = videoController;

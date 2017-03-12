var videoController = function(videoService) {
    var getVideos = function(req, res) {
        videoService.collectVideos()
            .then(function(data) {
                res.send(data);
            })
            .catch(function(err) {
                console.log(err);
                res.send(500);
            })
    };

    return {
        getVideos: getVideos
    }
};

module.exports = videoController;

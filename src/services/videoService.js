var videoService = function() {
    var service = function(req, res) {
        console.log('Video Service');
    };

    return {
        service: service
    }
};

module.exports = videoService;

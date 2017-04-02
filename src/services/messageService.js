var messageService = function() {
    var message = function(req) {
        console.log(req.query);
        return 'Message';
    };

    return {
        message: message
    }
};

module.exports = messageService;

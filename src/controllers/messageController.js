var messageController = function(messageService) {
    var sendMessage = function(req, res) {
        res.send(messageService.message(req));
    };

    return {
        sendMessage: sendMessage
    }
};

module.exports = messageController;

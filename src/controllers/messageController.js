var messageController = function(messageService) {
    var sendMessage = function(req, res) {
        messageService.message(req, function(err, info) {
            if(err) {
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    };

    return {
        sendMessage: sendMessage
    }
};

module.exports = messageController;

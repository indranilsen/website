'use strict';

const router = require('express').Router();

const MessageService = require('../services/message.service.js');

router.post('/', (req, res) => {
    MessageService.message(req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = router;

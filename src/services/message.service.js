'use strict';

const _ = require('lodash');
const nodemailer = require('nodemailer');
const config = require('nconf');

const SMTPOptions = {
    service: config.get('service'),
    auth: {
        user: config.get('sender_email'),
        pass: config.get('pass')
    }
};

const mailOptions = {
    from: config.get('sender_email'),
    to: config.get('target_email'),
    text: 'Hello',
};

const transporter = nodemailer.createTransport(SMTPOptions);

const createMessage = function(data) {
    const name = _.defaultTo(data.name, 'Visitor');

    mailOptions.subject = `Hello from ${name}`;
    mailOptions.html = `<b>${name} [${data.email}]:</b><br><br>${data.message}`;

    return mailOptions;
};

const MessageService =  {
    message: (data) => {
        return new Promise((resolve, reject) => {
            transporter.sendMail(createMessage(data), function(err, info) {
                if (err || _.isUndefined(info)){
                    reject(err);
                }

                resolve(`Message sent: ${info.response}`);
            });
        });
    }
};

module.exports = MessageService;

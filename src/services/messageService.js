const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

if (!process.env.USER_EMAIL || !process.env.PASS || !process.env.SERVICE) {
    dotenv.load();
}

var messageService = function() {
    let SMTPOptions = {
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.PASS
        }
    };

    let mailOptions = {
        from: process.env.USER_EMAIL,
        to: 'indranilsen010@gmail.com',
        subject: 'Hello from Visitor',
        text: 'Hello',
        html: '<b>Hello from Visitor</b><br>'
    };

    let transporter = nodemailer.createTransport(SMTPOptions);

    var createMessage = function(data, options) {
        if(data.name !== null && data.name !== '') {
            options.subject = `Hello from ${data.name}`;
        }

        if(data.email !== null && data.email !== ''
            && data.message !== null && data.message !== '') {
            options.html = `<b>${data.name} [${data.email}]:</b><br><br>${data.message}`;
        }

        return options;
    };

    var message = function(req, callback) {
        mailOptions = createMessage(req.body, mailOptions);
        transporter.sendMail(mailOptions, function(err, info) {
            if(err){
                callback(err);
            }

            callback(null, `Message sent: ${info.response}`);
        });
    };

    return {
        message: message
    }
};

module.exports = messageService;

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

if (!process.env.USER_EMAIL || process.env.PASS || process.env.SERVICE) {
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
        subject: 'Hello',
        text: 'Hello world ',
        html: '<b>Hello world </b><br> Sending this email from node!!'
    };

    let transporter = nodemailer.createTransport(SMTPOptions);

    var message = function(req) {
        transporter.sendMail(mailOptions, function(err, info) {
            if(err){
                console.log(err);
            }

            console.log('Message sent: ' + info.response);
        });
        return 'Message';
    };

    return {
        message: message
    }
};

module.exports = messageService;

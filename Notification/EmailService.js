const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "reddington7812@gmail.com",
        pass: "oiyerqsqeyetuogi",
    }
});

module.exports = transport;

  
const nodemailer = require('nodemailer');
const { ErrorMessage } = require('../helpers/commonFunctions');
const ejs = require('ejs');

exports.sendMail = (MailData, res) => {
  try {
    const mailTransporter = nodemailer.createTransport({
      auth: {
        user: 'jitheesh@spericorn.com',
        pass: '123321@JK',
      },
    });

    ejs.renderFile('views/index.ejs', { MailData }, (err, data) => {
      if (err) ErrorMessage(res, err.message);
      else
        mailDetails = {
          from: 'jitheesh@spericorn.com',
          cc: cc,
          subject: subject,
          to: MailData.Email,
          html: data,
        };
    });
    mailTransporter.sendMail(mailDetails);
  } catch (error) {
    ErrorMessage(res, error.message);
  }
};

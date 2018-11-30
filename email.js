const nodemailer = require('nodemailer');
const configs = require('./configs')



module.exports = (data) => {
    const transporter = nodemailer.createTransport({
        host: configs.email.host,
        port: 465,
        secure: true,
        auth: {
            user: configs.email.user,
            pass: configs.email.pass
        }
    })

    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: configs.email.user,
            to: configs.base.email,
            subject: data.subject,
            html: data.body + ' name: ' + data.name + ' email: ' + data.email,
        }, (err, info) => {
            if (err) {
                reject ({
                    error: true,
                    message: err,
                })
            }
            resolve ({success: true})
        })
    })
}

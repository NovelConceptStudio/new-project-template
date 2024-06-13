const nodemailer = require('nodemailer')

export const emailClient = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});
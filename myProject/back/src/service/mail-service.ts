import * as nodemailer from 'nodemailer';
const dotenv = require('dotenv');
dotenv.config();

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: "Gmail",
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Подтверждение почты для ' + process.env.API_URL,
      text: '',
      html: 
      `
        <div>
          <h1>Для подтверждения почты пройдите по ссылке</h1>
          <a href="${link}">${link}</a>
        </div>

      `
    })
  }

}

export default new MailService();
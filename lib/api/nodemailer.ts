import nodemailer, { SendMailOptions, Transporter } from 'nodemailer';

interface MailParams {
  subject: string;
  toEmail?: string;
  otpText: string;
  emailHtml: string;
  fromEmail?: string;
}

export async function sendMail({ subject, toEmail, otpText, emailHtml, fromEmail }: MailParams): Promise<void> {
  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions: SendMailOptions = {
    from: fromEmail ?? process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: JSON.stringify(otpText), // plain text body
    html: emailHtml, // html body
  };

  return await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

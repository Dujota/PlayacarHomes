import { sendMail } from 'lib/api/nodemailer';
import { adminEmailTemplate } from 'lib/email-templates/contact-admin';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { method } = req;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;

    switch (method) {
      case 'POST': {
        await sendMail({
          subject: 'New Inquiry 🎉 -> Playacar Homes Website',
          toEmail: process.env.NODEMAILER_EMAIL,
          fromEmail: email,
          otpText: `INQUIRY --> CONTACT FORMPLAYACAR HOMES WEBSITE, EMAIL ADDRESS: ${email}, PHONE NUMBER: ${phoneNumber}, MESSAGE: ${message}`,
          emailHtml: adminEmailTemplate({ phoneNumber, email, message }),
        });

        res.status(200).json({
          message: 'Thanks for reaching out! We will get back to you shortly.',
        });
        break;
      }
      // case 'GET': {
      //   res.status(200).send(req.auth_data);
      //   break;
      // }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Oops, there was a problem with your subscription, please try again or contact us',
    });
  }
};

export default handler;

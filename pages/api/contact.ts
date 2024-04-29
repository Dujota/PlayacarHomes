import { sendMail } from 'lib/api/nodemailer';
import { newSubscriberAdminMessage } from 'lib/email-templates/newsletter-sub';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { method } = req;
    const email = req.body.mail;

    switch (method) {
      case 'POST': {
        await sendMail({
          subject: 'New Subscriber 🎉 -> Playacar Homes Website',
          toEmail: process.env.NODEMAILER_EMAIL,
          fromEmail: email,
          otpText: 'NEW USER SUBSCRIBED TO THE MAILING LIST - PLAYACAR HOMES WEBSITE, EMAIL ADDRESS: ' + email,
          emailHtml: newSubscriberAdminMessage(email),
        });

        res.status(200).json({
          message: 'Your email has been succesfully added to the mailing list. Welcome 👋',
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

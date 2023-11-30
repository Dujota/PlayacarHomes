import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'denisdujota@gmail.com', // Your email where you'll receive emails
      from: 'denisdujota@gmail.com', // your website email address here
      subject: 'CONTACT FORM SUBMISSION',
      html: `<div>You've got a mail</div>`,
    });
    debugger;
  } catch (error) {
    debugger;
    return res.status(error.statusCode || 500).json({ error: error.message, message: 'Oops, there was a problem on our end, please try again.' });
  }

  return res.status(200).json({ error: '', message: 'Thanks for reaching out! We will get back to you shortly.' });
}

export default sendEmail;

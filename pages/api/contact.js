import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function contact(req, res) {
  if (req.method === 'POST') {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass,
      },
      secure: true,
    });

    const mailData = {
      from: email,
      to: 'azsa.nwhy@gmail.com',
      subject: `Message from ${req.body.name}`,
      html: `<div style="font-family: sans-serif;">
      <h1 style="text-align: center;">New Contact Message</h1>
      <div style="border: 1px solid black; padding: 10px 20px;">
        <div>
          <h4>Name</h4>
          <p style="color: #525252;">${req.body.name}</p>
        </div>
        <div>
          <h4>Email</h4>
          <a href='mailto:${req.body.email}'>${req.body.email}</a>
        </div>
        <div>
          <h4>Subject</h4>
          <p style="color: #525252;">${req.body.subject}</p>
        </div>
        <div>
          <h4>Message</h4>
          <p style="color: #525252;">${req.body.message}</p>
        </div>
      </div>
    </div>`,
    };

    try {
      await transporter.sendMail(mailData);
      return res.status(200).json({ message: 'Message Sent', success: true });
    } catch (err) {
      return res.status(400).json({ message: err.message, success: false });
    }
  }

  return res.status(400).json({ message: 'Bad Request' });
}

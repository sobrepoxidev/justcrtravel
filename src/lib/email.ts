import nodemailer from 'nodemailer';

export async function sendMail(subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Tu Proyecto" <${process.env.EMAIL_USER}>`,
    to: 'Info@justcostaricatravel.com',
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}

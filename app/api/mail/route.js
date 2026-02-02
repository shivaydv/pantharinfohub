import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { recipientEmail } = body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use a service or SMTP server
      auth: {
        user: process.env.EMAIL_USER, // Email address
        pass: process.env.EMAIL_PASS, // App-specific password
      },
    });

    // Email for sender
    const mailOptionsSender = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Copy of Email`,
      text: `${recipientEmail}: Connected you through PantharInfo Hub `,
    };

    // Email for recipient
    const mailOptionsRecipient = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Thank You For Visitng Panthar Info Hub",
      text: "Thank You for contacting us! You will be notified Soon!",
    };

    // Send both emails
    await transporter.sendMail(mailOptionsSender);
    await transporter.sendMail(mailOptionsRecipient); 

    return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email', error }), {
      status: 500,
    });
  }
}

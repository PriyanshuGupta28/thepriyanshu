import nodemailer from "nodemailer";

export async function sendMail(name: string, email: string, message: string) {
  // Create transporter object using SMTP settings
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender info
    to: "28priyanshu2001@gmail.com", // receiver email address
    subject: "New Contact Message",
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };
  console.log(mailOptions, "mailOptions");
  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
}

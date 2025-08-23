import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    console.log("Contact form submission started...");
    let formData;
    try {
      formData = await request.formData();
      console.log("Form data parsed successfully");
    } catch (parseError) {
      console.error("Form data parsing error:", parseError);
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid form data format"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Form fields extracted:", { name: !!name, email: !!email, message: !!message });
    if (!name || !email || !message) {
      console.log("Validation failed: missing required fields");
      return new Response(JSON.stringify({
        success: false,
        message: "All fields are required"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed: invalid email format");
      return new Response(JSON.stringify({
        success: false,
        message: "Please enter a valid email address"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Form validation passed");
    console.log("Checking environment variables...");
    const gmailUser = undefined                          ;
    const gmailPassword = undefined                                  ;
    console.log("Environment variables:", {
      gmailUser: gmailUser ? "SET" : "NOT SET",
      gmailPassword: gmailPassword ? "SET" : "NOT SET"
    });
    if (!gmailPassword) {
      console.error("GMAIL_APP_PASSWORD environment variable is not set");
      return new Response(JSON.stringify({
        success: false,
        message: "Email service is not configured. Please contact support."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!gmailUser) {
      console.error("GMAIL_USER environment variable is not set");
      return new Response(JSON.stringify({
        success: false,
        message: "Email service is not configured. Please contact support."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Environment variables validated");
    console.log("Creating email transporter...");
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPassword
        },
        secure: true,
        port: 465
      });
      console.log("Email transporter created");
    } catch (transporterError) {
      console.error("Transporter creation error:", transporterError);
      return new Response(JSON.stringify({
        success: false,
        message: "Email service configuration error"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Verifying email connection...");
    try {
      await transporter.verify();
      console.log("Email connection verified");
    } catch (verifyError) {
      console.error("Email verification error:", verifyError);
      return new Response(JSON.stringify({
        success: false,
        message: "Email service authentication failed. Please check your Gmail app password."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Preparing email content...");
    const subject = `Portfolio Contact from ${name}`;
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio website contact form.
    `;
    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      subject,
      text: emailContent
    };
    console.log("Sending email...");
    let result;
    try {
      result = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", result.messageId);
    } catch (sendError) {
      console.error("Email sending error:", sendError);
      return new Response(JSON.stringify({
        success: false,
        message: "Failed to send email. Please try again later."
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("Contact form submission completed successfully");
    return new Response(JSON.stringify({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Unexpected contact form error:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "An unexpected error occurred. Please try again."
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

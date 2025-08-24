import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
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
      return new Response(JSON.stringify({
        success: false,
        message: "Please enter a valid email address"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const gmailUser = undefined                          ;
    const gmailPassword = undefined                                  ;
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
    const emailConfigs = [
      // Option 1: Gmail with App Password (Port 465)
      {
        name: "Gmail SSL",
        config: {
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPassword
          },
          secure: true,
          port: 465
        }
      },
      // Option 2: Gmail with App Password (Port 587)
      {
        name: "Gmail TLS",
        config: {
          service: "gmail",
          auth: {
            user: gmailUser,
            pass: gmailPassword
          },
          secure: false,
          port: 587,
          tls: {
            rejectUnauthorized: false
          }
        }
      },
      // Option 3: Generic SMTP
      {
        name: "Generic SMTP",
        config: {
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: gmailUser,
            pass: gmailPassword
          },
          tls: {
            rejectUnauthorized: false
          }
        }
      }
    ];
    let transporter;
    let workingConfig = null;
    for (const emailConfig of emailConfigs) {
      try {
        console.log(`Trying ${emailConfig.name} configuration...`);
        transporter = nodemailer.createTransport(emailConfig.config);
        await transporter.verify();
        console.log(`${emailConfig.name} configuration successful`);
        workingConfig = emailConfig.name;
        break;
      } catch (configError) {
        console.error(`${emailConfig.name} configuration failed:`, configError);
        continue;
      }
    }
    if (!transporter || !workingConfig) {
      throw new Error("All email configurations failed. Please check your Gmail app password settings.");
    }
    const sanitizeHtml = (str) => {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    };
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMessage = sanitizeHtml(message);
    const subject = `Portfolio Contact from ${sanitizedName}`;
    const emailContent = `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Sent from your portfolio website contact form.
    `;
    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      subject,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px;">
          <h2 style="color: #06b6d4; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #06b6d4;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${sanitizedMessage}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e9ecef; margin: 20px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            Sent from your portfolio website contact form.
          </p>
        </div>
      `
    };
    console.log("Sending email using", workingConfig, "configuration...");
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);
    return new Response(JSON.stringify({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Contact form error:", error);
    let errorMessage = "Something went wrong. Please try again.";
    if (error instanceof Error) {
      if (error.message.includes("Invalid login") || error.message.includes("authentication")) {
        errorMessage = "Email authentication failed. Please check your Gmail app password settings.";
      } else if (error.message.includes("ENOTFOUND") || error.message.includes("ECONNREFUSED")) {
        errorMessage = "Network error. Please check your connection and try again.";
      } else if (error.message.includes("All email configurations failed")) {
        errorMessage = "Email service is not properly configured. Please check your Gmail app password.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }
    }
    return new Response(JSON.stringify({
      success: false,
      message: errorMessage
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

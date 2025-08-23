import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    console.log("Testing email configuration...");
    const configs = [
      {
        name: "Gmail with App Password (Port 465)",
        config: {
          service: "gmail",
          auth: {
            user: "nikhilbajantri86@gmail.com",
            pass: "ivzn dgjc qfsl uyka"
          },
          secure: true,
          port: 465
        }
      },
      {
        name: "Gmail with App Password (Port 587)",
        config: {
          service: "gmail",
          auth: {
            user: "nikhilbajantri86@gmail.com",
            pass: "ivzn dgjc qfsl uyka"
          },
          secure: false,
          port: 587,
          tls: {
            rejectUnauthorized: false
          }
        }
      },
      {
        name: "Generic SMTP",
        config: {
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "nikhilbajantri86@gmail.com",
            pass: "ivzn dgjc qfsl uyka"
          },
          tls: {
            rejectUnauthorized: false
          }
        }
      }
    ];
    const results = [];
    for (const config of configs) {
      try {
        console.log(`Testing ${config.name}...`);
        const transporter = nodemailer.createTransport(config.config);
        await transporter.verify();
        results.push({
          name: config.name,
          status: "SUCCESS",
          message: "Configuration works"
        });
        console.log(`${config.name}: SUCCESS`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        results.push({
          name: config.name,
          status: "FAILED",
          message: errorMessage
        });
        console.log(`${config.name}: FAILED - ${errorMessage}`);
      }
    }
    return new Response(JSON.stringify({
      success: true,
      results,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Test email error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

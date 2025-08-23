export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    console.log("Debugging environment variables...");
    const envVars = {
      GMAIL_USER: undefined                          ,
      GMAIL_APP_PASSWORD: undefined                                   ? "SET" : "NOT SET",
      NODE_ENV: process.env.NODE_ENV,
      MODE: "production",
      DEV: true,
      PROD: false,
      SSR: true
    };
    console.log("Environment variables:", envVars);
    const gmailUser = undefined                          ;
    const gmailPassword = undefined                                  ;
    const status = {
      success: true,
      message: "Environment variables check completed",
      environment: envVars,
      gmailUser: gmailUser || "NOT SET",
      gmailPasswordSet: !!gmailPassword,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      recommendations: []
    };
    if (!gmailUser) {
      status.recommendations.push("GMAIL_USER environment variable is not set");
    }
    if (!gmailPassword) {
      status.recommendations.push("GMAIL_APP_PASSWORD environment variable is not set");
    }
    if (status.recommendations.length > 0) {
      status.message = "Environment variables check completed with issues";
    }
    return new Response(JSON.stringify(status, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
    });
  } catch (error) {
    console.error("Debug environment error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }, null, 2), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }
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

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Disable static generation for this API endpoint
export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    console.log('Testing email configuration...');
    
    // Get environment variables
    const gmailUser = import.meta.env.GMAIL_USER || 'nikhilbajantri86@gmail.com';
    const gmailPassword = import.meta.env.GMAIL_APP_PASSWORD;

    if (!gmailPassword) {
      return new Response(JSON.stringify({
        success: false,
        error: 'GMAIL_APP_PASSWORD environment variable is not set',
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Test different configurations
    const configs = [
      {
        name: 'Gmail with App Password (Port 465)',
        config: {
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPassword
          },
          secure: true,
          port: 465
        }
      },
      {
        name: 'Gmail with App Password (Port 587)',
        config: {
          service: 'gmail',
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
      {
        name: 'Generic SMTP',
        config: {
          host: 'smtp.gmail.com',
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

    const results = [];

    for (const config of configs) {
      try {
        console.log(`Testing ${config.name}...`);
        const transporter = nodemailer.createTransport(config.config);
        await transporter.verify();
        results.push({
          name: config.name,
          status: 'SUCCESS',
          message: 'Configuration works'
        });
        console.log(`${config.name}: SUCCESS`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        results.push({
          name: config.name,
          status: 'FAILED',
          message: errorMessage
        });
        console.log(`${config.name}: FAILED - ${errorMessage}`);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      results,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Test email error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

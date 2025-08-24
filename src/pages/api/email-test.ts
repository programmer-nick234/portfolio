import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Disable static generation for this API endpoint
export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    console.log('Testing email functionality...');
    
    // Check environment variables
    const gmailUser = import.meta.env.GMAIL_USER;
    const gmailPassword = import.meta.env.GMAIL_APP_PASSWORD;

    console.log('Environment check:', {
      gmailUser: gmailUser ? 'SET' : 'NOT SET',
      gmailPassword: gmailPassword ? 'SET' : 'NOT SET'
    });

    if (!gmailUser || !gmailPassword) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Environment variables not set',
        details: {
          gmailUser: gmailUser ? 'SET' : 'NOT SET',
          gmailPassword: gmailPassword ? 'SET' : 'NOT SET'
        },
        solution: 'Set GMAIL_USER and GMAIL_APP_PASSWORD in Vercel environment variables'
      }, null, 2), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Test email transporter
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword
      },
      secure: true,
      port: 465
    });

    // Verify connection
    console.log('Verifying email connection...');
    await transporter.verify();
    console.log('Email connection verified successfully');

    // Send test email
    console.log('Sending test email...');
    const result = await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      subject: 'Portfolio Email Test',
      text: 'This is a test email from your portfolio contact form. If you receive this, the email functionality is working correctly!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #06b6d4;">✅ Email Test Successful!</h2>
          <p>This is a test email from your portfolio contact form.</p>
          <p>If you receive this email, your contact form is working correctly!</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    console.log('Test email sent successfully:', result.messageId);

    return new Response(JSON.stringify({
      success: true,
      message: 'Email test successful!',
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Email test error:', error);
    
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return new Response(JSON.stringify({
      success: false,
      error: errorMessage,
      timestamp: new Date().toISOString(),
      solution: 'Check your Gmail app password and environment variables'
    }, null, 2), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};


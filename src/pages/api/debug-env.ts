import type { APIRoute } from 'astro';

// Disable static generation for this API endpoint
export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    console.log('Debugging environment variables...');
    
    // Check all environment variables
    const envVars = {
      GMAIL_USER: import.meta.env.GMAIL_USER,
      GMAIL_APP_PASSWORD: import.meta.env.GMAIL_APP_PASSWORD ? 'SET' : 'NOT SET',
      NODE_ENV: import.meta.env.NODE_ENV,
      MODE: import.meta.env.MODE,
      DEV: import.meta.env.DEV,
      PROD: import.meta.env.PROD,
      SSR: import.meta.env.SSR
    };

    console.log('Environment variables:', envVars);

    // Get environment variables
    const gmailUser = import.meta.env.GMAIL_USER;
    const gmailPassword = import.meta.env.GMAIL_APP_PASSWORD;

    const status = {
      success: true,
      message: 'Environment variables check completed',
      environment: envVars,
      gmailUser: gmailUser || 'NOT SET',
      gmailPasswordSet: !!gmailPassword,
      timestamp: new Date().toISOString(),
      recommendations: [] as string[]
    };

    // Add recommendations based on what's missing
    if (!gmailUser) {
      status.recommendations.push('GMAIL_USER environment variable is not set');
    }
    
    if (!gmailPassword) {
      status.recommendations.push('GMAIL_APP_PASSWORD environment variable is not set');
    }

    if (status.recommendations.length > 0) {
      status.message = 'Environment variables check completed with issues';
    }

    return new Response(JSON.stringify(status, null, 2), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (error) {
    console.error('Debug environment error:', error);
    
    return new Response(JSON.stringify({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, null, 2), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  }
};

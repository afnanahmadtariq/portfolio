import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // EmailJS REST API endpoint
  const url = 'https://api.emailjs.com/api/v1.0/email/send';

  // These should be set in your .env.local (never commit your private key)
  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const user_id = process.env.EMAILJS_PUBLIC_KEY;
  const accessToken = process.env.EMAILJS_PRIVATE_KEY;

  if (!service_id || !template_id || !user_id) {
    return NextResponse.json({ error: 'EmailJS environment variables not set.' }, { status: 500 });
  }

  const payload = {
    service_id,
    template_id,
    user_id,
    template_params: {
      name,
      email,
      message,
    },
    accessToken,
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const error = await res.text();
      console.error('EmailJS error:', error);
      return NextResponse.json({ error }, { status: res.status });
    }
    return NextResponse.json({ success: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}

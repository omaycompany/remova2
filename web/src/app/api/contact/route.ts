import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract and validate form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || '',
      phone: formData.get('phone') as string || '',
      subject: formData.get('subject') as string || '',
      message: formData.get('message') as string
    };

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using our email system
    const { sendEmail, emailTemplates } = await import('@/lib/email');
    
    const contactTemplate = emailTemplates.contactFormNotification(data);
    const emailResult = await sendEmail({
      to: process.env.TEAM_NOTIFICATIONS_EMAIL || 'notifications@remova.org',
      subject: contactTemplate.subject,
      html: contactTemplate.html
    });

    if (emailResult.success) {
      console.log('✅ Contact form notification sent to team');
    } else {
      console.error('❌ Failed to send contact form notification:', emailResult.error);
    }
    
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully. We will reply within one business day.',
        submissionId: `CF-${Date.now()}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or email notifications@remova.org directly.' },
      { status: 500 }
    );
  }
}
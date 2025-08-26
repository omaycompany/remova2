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
  console.log('🔥 CONTACT FORM API CALLED');
  
  try {
    console.log('📝 Extracting form data...');
    const formData = await request.formData();
    
    // Log all form data received
    console.log('📋 Raw form data:');
    for (const [key, value] of formData.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    
    // Extract and validate form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || '',
      phone: formData.get('phone') as string || '',
      subject: formData.get('subject') as string || '',
      message: formData.get('message') as string
    };

    console.log('✅ Extracted contact data:', data);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message' },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed')

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('📧 Preparing to send email...');
    
    // Send email using our email system
    const { sendEmail, emailTemplates } = await import('@/lib/email');
    
    console.log('📄 Generating email template...');
    const contactTemplate = emailTemplates.contactFormNotification(data);
    console.log('✅ Email template generated:', {
      subject: contactTemplate.subject,
      htmlLength: contactTemplate.html.length
    });
    
    const targetEmail = process.env.TEAM_NOTIFICATIONS_EMAIL || 'notifications@remova.org';
    console.log('📮 Sending email to:', targetEmail);
    
    const emailResult = await sendEmail({
      to: targetEmail,
      subject: contactTemplate.subject,
      html: contactTemplate.html
    });

    console.log('📧 Email send result:', emailResult);

    if (emailResult.success) {
      console.log('✅ Contact form notification sent to team successfully');
    } else {
      console.error('❌ Failed to send contact form notification:', emailResult.error);
      // Don't fail the API call if email fails - still return success to user
    }
    
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully. We will reply within one business day.',
        submissionId: `CF-${Date.now()}`
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 CONTACT FORM API ERROR:', {
      error: error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      name: error instanceof Error ? error.name : 'Unknown error type'
    });
    return NextResponse.json(
      { error: 'Internal server error. Please try again or email notifications@remova.org directly.' },
      { status: 500 }
    );
  }
}
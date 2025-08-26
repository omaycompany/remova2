import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  company: string;
  aliases?: string;
  ein?: string;
  platforms?: string;
  contactName: string;
  email: string;
  phone?: string;
  notes?: string;
  nda: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract and validate form data
    const data: ContactFormData = {
      company: formData.get('company') as string,
      aliases: formData.get('aliases') as string || '',
      ein: formData.get('ein') as string || '',
      platforms: formData.get('platforms') as string || '',
      contactName: formData.get('contactName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || '',
      notes: formData.get('notes') as string || '',
      nda: formData.get('nda') === 'on'
    };

    // Basic validation
    if (!data.company || !data.contactName || !data.email || !data.nda) {
      return NextResponse.json(
        { error: 'Missing required fields: company, contactName, email, and NDA agreement' },
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

    // Format the email content
    const emailContent = `
New Contact Form Submission - Remova.org

Company: ${data.company}
Aliases: ${data.aliases || 'None provided'}
EIN/DUNS: ${data.ein || 'None provided'}
Priority Platforms: ${data.platforms || 'None specified'}

Contact Information:
Name: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone || 'None provided'}

Notes/Urgency:
${data.notes || 'None provided'}

NDA Agreement: ${data.nda ? 'Agreed' : 'Not agreed'}

Submitted at: ${new Date().toISOString()}
    `;

    // Log the submission (in production, you'd send an actual email)
    console.log('Contact form submission received:');
    console.log(emailContent);

    // Send email using our email system
    const { sendEmail, emailTemplates } = await import('@/lib/email');
    
    const contactTemplate = emailTemplates.contactFormNotification(validatedData);
    const emailResult = await sendEmail({
      to: process.env.TEAM_NOTIFICATIONS_EMAIL || 'hello@remova.org',
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
      { error: 'Internal server error. Please try again or email hello@remova.org directly.' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const freeSignupSchema = z.object({
  email: z.string().email(),
  companyName: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, companyName } = freeSignupSchema.parse(body);

    // TODO: Add user to database and send welcome email
    // For now, we'll just validate the input and return success
    
    console.log('Free membership signup:', { email, companyName });

    // Here you would typically:
    // 1. Save user to database
    // 2. Send welcome email
    // 3. Set up their free account

    return NextResponse.json({
      success: true,
      message: 'Free membership created successfully',
      redirectUrl: '/thank-you?plan=free'
    });

  } catch (error) {
    console.error('Free signup error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create free membership' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { logoutAdmin } from '@/lib/admin-auth';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('remova_admin_session');

    if (sessionCookie?.value) {
      await logoutAdmin(sessionCookie.value);
    }

    // Clear session cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set('remova_admin_session', '', {
      expires: new Date(0),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return response;

  } catch (error) {
    console.error('Admin logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}

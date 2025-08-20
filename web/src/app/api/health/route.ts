import { NextResponse } from 'next/server';
import { checkConnection } from '@/lib/db';

export async function GET() {
  try {
    const dbConnected = await checkConnection();
    
    const health = {
      ok: true,
      timestamp: new Date().toISOString(),
      services: {
        database: dbConnected,
      },
    };

    if (!dbConnected) {
      return NextResponse.json(
        { ...health, ok: false },
        { status: 503 }
      );
    }

    return NextResponse.json(health);
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { 
        ok: false, 
        timestamp: new Date().toISOString(),
        error: 'Health check failed' 
      },
      { status: 500 }
    );
  }
}
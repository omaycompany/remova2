import { redirect } from 'next/navigation';

// Mock demo client session
export default function DemoClientPage() {
  // Create a mock session for demo purposes
  // In a real app, this would be handled by the authentication system
  
  // Set a demo session cookie and redirect to members dashboard
  const headers = new Headers();
  headers.set('Set-Cookie', `remova_session=demo-client-id-12345678:${Date.now()}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);
  
  redirect('/members');
}
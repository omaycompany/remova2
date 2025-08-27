import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataLeaksManager from '@/components/DataLeaksManager';

export default async function DataLeaksPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/data-leaks');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/data-leaks');
  }

  return (
    <DashboardLayout title="Trade Data Leaks">
      <DataLeaksManager client={client} />
    </DashboardLayout>
  );
}

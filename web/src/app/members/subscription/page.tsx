import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import BillingDashboard from '@/components/BillingDashboard';

export default async function SubscriptionPage() {
  // Server-side authentication check
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');
  
  if (!sessionCookie?.value) {
    redirect('/membership/free?redirect=/members/subscription');
  }

  const client = await getClientById(sessionCookie.value);
  if (!client) {
    redirect('/membership/free?redirect=/members/subscription');
  }

  return (
    <DashboardLayout title="Subscription Management">
      <BillingDashboard />
    </DashboardLayout>
  );
}
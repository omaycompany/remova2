import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getClientById } from '@/lib/auth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DataLeaksManager from '@/components/DataLeaksManager';

interface DataLeaksPageProps {
  searchParams: Promise<{
    status?: 'active' | 'requested' | 'removed';
  }>;
}

export default async function DataLeaksPage({ searchParams }: DataLeaksPageProps) {
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

  const params = await searchParams;
  const statusFilter = params.status || 'active';

  // Define titles and descriptions based on status
  const getPageInfo = (status: string) => {
    switch (status) {
      case 'active':
        return {
          title: 'Active Leaks',
          description: 'Currently exposed data that requires immediate attention'
        };
      case 'requested':
        return {
          title: 'Removal Requested Leaks',
          description: 'Data removal requests submitted and in progress'
        };
      case 'removed':
        return {
          title: 'Removed Leaks',
          description: 'Successfully removed data exposures'
        };
      default:
        return {
          title: 'Trade Data Leaks',
          description: 'Monitor and manage your data exposure across platforms'
        };
    }
  };

  const pageInfo = getPageInfo(statusFilter);

  return (
    <DashboardLayout title={pageInfo.title}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-medium text-gray-900">{pageInfo.title}</h1>
          <p className="text-gray-600 mt-1">{pageInfo.description}</p>
        </div>

        {/* Status Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <a
              href="/members/data-leaks?status=active"
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                statusFilter === 'active'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Active Leaks
            </a>
            <a
              href="/members/data-leaks?status=requested"
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                statusFilter === 'requested'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Removal Requested
            </a>
            <a
              href="/members/data-leaks?status=removed"
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                statusFilter === 'removed'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Removed Leaks
            </a>
          </nav>
        </div>

        {/* Admin-Only Management Notice */}
        <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-800">Managed by Remova Team</h3>
              <p className="text-blue-700 text-sm mt-1">
                All leak statuses are managed by our admin team. You can view the current status here, but changes are processed through our secure admin dashboard.
              </p>
            </div>
          </div>
        </div>

        <DataLeaksManager client={client} statusFilter={statusFilter} />
      </div>
    </DashboardLayout>
  );
}

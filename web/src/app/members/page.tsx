import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getClientById } from '@/lib/auth';
import { query } from '@/lib/db';
import type { CBPFiling, TakedownCase } from '@/lib/types';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import GreatDashboard from '@/components/dashboard/GreatDashboard';
import FreeDashboard from '@/components/dashboard/FreeDashboard';

interface DashboardData {
  cbpFiling: CBPFiling | null;
  takedownCases: TakedownCase[];
  stats: {
    totalPlatforms: number;
    removedCount: number;
    inProgressCount: number;
    notStartedCount: number;
  };
}

async function getDashboardData(clientId: string): Promise<DashboardData> {
  try {
    // Get CBP filing status
    const cbpFiling = await query<CBPFiling>(
      'SELECT * FROM cbp_filings WHERE client_id = $1',
      [clientId]
    );

    // Get takedown cases
    const takedownCases = await query<TakedownCase>(
      'SELECT * FROM takedown_cases WHERE client_id = $1 ORDER BY platform_name',
      [clientId]
    );

    // Calculate stats
    const stats = {
      totalPlatforms: takedownCases.length,
      removedCount: takedownCases.filter(tc => tc.status === 'removed').length,
      inProgressCount: takedownCases.filter(tc => ['requested', 'in_progress'].includes(tc.status)).length,
      notStartedCount: takedownCases.filter(tc => tc.status === 'not_started').length,
    };

    return {
      cbpFiling: cbpFiling[0] || null,
      takedownCases,
      stats
    };
  } catch (error) {
    console.error('Dashboard data error:', error);
    throw error;
  }
}

interface MembersPageProps {
  searchParams: Promise<{
    welcome?: string;
    plan?: string;
    intake_completed?: string;
  }>;
}

async function MembersPage({ searchParams }: MembersPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('remova_session');

  if (!sessionCookie?.value) {
    redirect('/membership/free');
  }

  // Parse session
  const [clientId, timestamp] = sessionCookie.value.split(':');
  
  if (!clientId || !timestamp) {
    redirect('/membership/free');
  }

  // Check session expiry
  const sessionTime = parseInt(timestamp);
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  if (now - sessionTime > twentyFourHours) {
    redirect('/membership/free?error=session_expired');
  }

  // Get client info
  const client = await getClientById(clientId);
  if (!client) {
    redirect('/membership/free?error=client_not_found');
  }

  // Check if user is on free tier
  const isFreeUser = client.plan_tier === 'free';
  const showWelcome = params.welcome === 'true' || params.intake_completed === 'true';

  if (isFreeUser) {
    return (
      <DashboardLayout>
        <FreeDashboard 
          client={client} 
          showWelcome={showWelcome}
        />
        {showWelcome && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17514795753/dgBTCLSUk5AbEOml2p9B',
                    'transaction_id': '${client.id}'
                  });
                }
              `,
            }}
          />
        )}
      </DashboardLayout>
    );
  }

  // Get dashboard data for paid users
  const dashboardData = await getDashboardData(clientId);

  return (
    <DashboardLayout>
      <GreatDashboard 
        client={client} 
        dashboardData={dashboardData}
      />
      {showWelcome && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17514795753/dgBTCLSUk5AbEOml2p9B',
                  'transaction_id': '${client.id}'
                });
              }
            `,
          }}
        />
      )}
    </DashboardLayout>
  );
}

export default MembersPage;
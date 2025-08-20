import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query, withTransaction } from '@/lib/db';
import { getAuthenticatedClient, logAudit } from '@/lib/auth';
import type { AnonymityCheck, AnonymityCheckResult } from '@/lib/types';

// Rate limiting: In-memory store (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // 5 checks per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const key = `anonymity-check:${clientId}`;
  
  const current = rateLimitMap.get(key);
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (current.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  current.count += 1;
  rateLimitMap.set(key, current);
  return true;
}

const AnonymityCheckSchema = z.object({
  partnerCompany: z.string().min(2).max(200),
  partnerCountry: z.string().optional(),
});

// Search platforms with their actual search URLs
const SEARCH_PLATFORMS = [
  { name: 'Panjiva', searchUrl: 'https://panjiva.com/search' },
  { name: 'ImportGenius', searchUrl: 'https://www.importgenius.com/search' },
  { name: 'ImportYeti', searchUrl: 'https://www.importyeti.com/search' },
  { name: 'Trademo', searchUrl: 'https://trademo.com/search' },
  { name: 'Descartes Datamyne', searchUrl: 'https://www.datamyne.com/search' },
  { name: 'ImportKey', searchUrl: 'https://www.importkey.com/search' },
  { name: 'Volza', searchUrl: 'https://www.volza.com/search' },
  { name: 'Zauba Corp', searchUrl: 'https://www.zaubacorp.com/company-list' },
  { name: 'MarineTraffic', searchUrl: 'https://www.marinetraffic.com/en/data/?asset_type=vessels' },
  { name: 'VesselFinder', searchUrl: 'https://www.vesselfinder.com/vessels' },
  { name: 'Tendata', searchUrl: 'https://www.tendata.com/search' },
  { name: 'Trade Atlas', searchUrl: 'https://www.tradeatlas.com/search' },
  { name: 'Market Inside', searchUrl: 'https://www.marketinside.com/search' },
  { name: 'Cypher Exim', searchUrl: 'https://www.cypherexim.com/search' },
  { name: 'ManifestDB', searchUrl: 'https://www.manifestdb.com/search' },
  { name: 'Seair Exim Solutions', searchUrl: 'https://www.seair.co.in/exim-data.aspx' },
];

function generateSearchLinks(partnerCompany: string, partnerCountry?: string) {
  const searchQuery = partnerCountry 
    ? `${partnerCompany} ${partnerCountry}`
    : partnerCompany;

  return SEARCH_PLATFORMS.map(platform => ({
    name: platform.name,
    searchUrl: platform.searchUrl,
    searchQuery: searchQuery,
    directSearchUrl: `${platform.searchUrl}?q=${encodeURIComponent(searchQuery)}`
  }));
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const client = await getAuthenticatedClient(request);
    if (!client) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check rate limit
    if (!checkRateLimit(client.id)) {
      return NextResponse.json({ 
        error: 'Rate limit exceeded. Maximum 5 checks per hour.' 
      }, { status: 429 });
    }

    // Parse and validate request body
    const body = await request.json();
    const { partnerCompany, partnerCountry } = AnonymityCheckSchema.parse(body);

    // Generate search links for all platforms
    const searchLinks = generateSearchLinks(partnerCompany, partnerCountry);
    
    const platformCount = searchLinks.length;

    // Store the check in database
    const result = await withTransaction(async (dbClient) => {
      // Insert anonymity check record
      const checkResult = await dbClient.query(
        `INSERT INTO anonymity_checks (member_id, partner_company, partner_country, platform_count, exposed_count, status, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         RETURNING *`,
        [client.id, partnerCompany, partnerCountry || null, platformCount, 0, 'search_links_provided']
      );
      
      return checkResult.rows[0] as AnonymityCheck;
    });

    // Log the action
    await logAudit('client', client.id, 'anonymity_check_performed', {
      checkId: result.id,
      partnerCompany,
      partnerCountry,
      platformCount
    });

    // Return search links for all platforms
    return NextResponse.json({
      checkId: result.id,
      partnerCompany,
      partnerCountry,
      platformCount,
      status: 'search_links_provided',
      searchLinks: searchLinks,
      createdAt: result.created_at
    });

  } catch (error) {
    console.error('Anonymity check error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        error: 'Invalid request data',
        details: error.errors
      }, { status: 400 });
    }

    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const client = await getAuthenticatedClient(request);
    if (!client) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get client's anonymity check history
    const checks = await query<AnonymityCheck>(
      `SELECT * FROM anonymity_checks 
       WHERE member_id = $1 
       ORDER BY created_at DESC 
       LIMIT 10`,
      [client.id]
    );

    return NextResponse.json({
      checks: checks.map(check => ({
        id: check.id,
        partnerCompany: check.partner_company,
        partnerCountry: check.partner_country,
        platformCount: check.platform_count,
        exposedCount: check.exposed_count,
        status: check.status,
        createdAt: check.created_at
      }))
    });

  } catch (error) {
    console.error('Get anonymity checks error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
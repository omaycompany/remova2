import { GoogleGenerativeAI } from '@google/generative-ai';
import { google } from 'googleapis';
import { query, queryOne } from '@/lib/db';

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Initialize Google Custom Search
const customsearch = google.customsearch('v1');

// Types for the research system
export interface ResearchSession {
  id: string;
  client_id: string;
  target_company_name: string;
  status: 'initiated' | 'in_progress' | 'completed' | 'failed' | 'cancelled';
  total_queries: number;
  total_urls_analyzed: number;
  verified_leaks_count: number;
  potential_leaks_count: number;
  started_at: Date;
  completed_at?: Date;
  error_message?: string;
  research_metadata?: Record<string, any>;
}

export interface TradeDataLeak {
  source_url: string;
  platform_type: 'Data Broker' | 'B2B Marketplace' | 'Maritime Tracker' | 'Government Portal' | 'Other';
  leak_type: 'Supplier Relationship' | 'Customer Relationship' | 'Shipment Details' | 'Trade Volume' | 'Product Details';
  status: 'Verified Leak' | 'Potential Leak - Manual Review Required' | 'False Positive';
  risk_assessment: 'High' | 'Medium' | 'Low';
  identified_trade_partners: string[];
  evidence_snippet: string;
  analysis_notes: string;
}

export interface ResearchReport {
  verified_leaks: TradeDataLeak[];
  research_summary: {
    queries_performed: string[];
    total_searches: number;
    urls_analyzed: number;
  };
}

// Tier-4 Senior Intelligence Analyst Prompt
const TIER_4_PROMPT = `
[ROLE & PERSONA: Tier-4 Senior Intelligence Analyst & Threat Hunter]
You are a Tier-4 Senior Intelligence Analyst for Remova.org. Your sole mission is to conduct exhaustive, deep-dive research to uncover and document all public commercial trade data leaks for a client. You are meticulous, relentless, and operate with zero-tolerance for unverified information. Accuracy is your only metric for success.

[OBJECTIVE]
Your objective is to execute a deep research protocol on the public internet to find, verify, and document every verifiable trade data leak for our client: '{CLIENT_NAME}'.

[DEFINITIONS]
- **Verified Leak:** Direct, explicit mention of the client's name in the context of a shipment, supplier, customer, importer, or exporter relationship on a public data platform.
- **False Positive:** Mentions in news, press releases, standard business directories, or other contexts not related to a specific trade transaction.

[KEYWORD & PLATFORM MATRIX]
You MUST use the following terms in combination with the client's name during your search protocol. You are expected to generate relevant variations.
- **Generic Terms:** "trade data," "shipment records," "import data," "export data," "bill of lading."
- **Role Terms:** "customers," "suppliers," "importers," "exporters," "consignee."
- **Platform Names:** "Panjiva," "ImportGenius," "Trademo," "Descartes Datamyne," "ImportYeti," "ImportKey," "MarineTraffic," "VesselFinder," "Zauba Corp," "Volza," "Trade Atlas," "Market Inside," "Tendata," "Tradesparq," "Seair Exim Solutions."

[SOP - DEEP RESEARCH PROTOCOL]
You will execute a minimum of 15 and a maximum of 25 distinct web searches to complete this objective.

1. **Phase 1 - Broad Spectrum Sweep:** Execute 10-15 initial search queries combining the client's name with the terms from the [KEYWORD & PLATFORM MATRIX]. The goal is to identify a wide range of potential data broker domains and high-level leaks.

2. **Phase 2 - Deep Dive Analysis:** For the most promising URLs discovered in Phase 1, retrieve the full text content of that page. Analyze this content for direct evidence of leaks. Look for patterns, such as frequently mentioned trade partner names or specific product types.

3. **Phase 3 - Vector Search & Cross-Reference:** Using the names of potential trade partners discovered in Phase 2, conduct 5-10 new searches to find additional records linking them back to our client (e.g., "{CLIENT_NAME}" AND "Global Widgets Ltd.").

4. **Phase 4 - Evidence Collation & Synthesis:** Consolidate all verified findings into the final JSON report. Discard all false positives.

[ANTI-HALLUCINATION & ACCURACY MANDATE]
- **MISSION CRITICAL:** Failure to adhere to these directives constitutes a mission failure.
- You will NEVER invent, assume, or infer any data not explicitly present in the source text.
- Every finding in the "verified_leaks" array MUST be supported by a direct "evidence_snippet" copied verbatim from the source URL.
- If certainty is below 95%, you must classify the status as 'Potential Leak - Manual Review Required' and explain your reasoning in the 'analysis_notes'.

[OUTPUT FORMAT]
Return your final report ONLY in a single, minified JSON object with the following structure:

{
  "verified_leaks": [
    {
      "source_url": "The exact URL where the leak was found.",
      "platform_type": "One of: 'Data Broker', 'B2B Marketplace', 'Maritime Tracker', 'Government Portal', 'Other'",
      "leak_type": "One of: 'Supplier Relationship', 'Customer Relationship', 'Shipment Details'",
      "status": "One of: 'Verified Leak', 'Potential Leak - Manual Review Required'",
      "risk_assessment": "One of: 'High', 'Medium', 'Low'",
      "identified_trade_partners": ["Name of any supplier/customer found in the leak, if any"],
      "evidence_snippet": "A direct, verbatim quote from the webpage showing the client's name and the associated trade data.",
      "analysis_notes": "Brief, factual notes on why this was classified as a leak and the assessed risk level."
    }
  ],
  "research_summary": {
    "queries_performed": ["query1", "query2", "..."],
    "total_searches": 22,
    "urls_analyzed": 45
  }
}

You have access to a webSearch function that you must use to conduct your research. Use it systematically following the protocol above.
`;

// Web Search Function Definition for Gemini
const WEB_SEARCH_FUNCTION = {
  name: "webSearch",
  description: "Search the web for information about trade data, shipments, and business relationships. Use this tool to conduct systematic research following the Tier-4 protocol.",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "The search query to execute. Should combine client name with trade-related terms and platform names."
      },
      phase: {
        type: "string",
        description: "The research phase: 'broad_sweep', 'deep_dive', 'vector_search', or 'cross_reference'"
      }
    },
    required: ["query", "phase"]
  }
};

// Web Search Implementation
async function webSearch(query: string, phase: string): Promise<any> {
  try {
    const response = await customsearch.cse.list({
      key: process.env.GOOGLE_SEARCH_API_KEY,
      cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
      q: query,
      num: 10,
      safe: 'medium'
    });

    const results = response.data.items?.map(item => ({
      title: item.title,
      url: item.link,
      snippet: item.snippet,
      displayLink: item.displayLink
    })) || [];

    console.log(`🔍 Phase ${phase} search: "${query}" - ${results.length} results`);
    
    return {
      query,
      phase,
      results,
      count: results.length
    };
  } catch (error) {
    console.error('Search error:', error);
    return {
      query,
      phase,
      results: [],
      count: 0,
      error: error instanceof Error ? error.message : 'Unknown search error'
    };
  }
}

// Create Research Session
export async function createResearchSession(clientId: string, targetCompanyName: string): Promise<string> {
  const result = await queryOne<{ id: string }>(
    `INSERT INTO research_sessions (client_id, target_company_name, status, started_at)
     VALUES ($1, $2, 'initiated', NOW())
     RETURNING id`,
    [clientId, targetCompanyName]
  );
  
  if (!result) {
    throw new Error('Failed to create research session');
  }
  
  return result.id;
}

// Update Research Session Status
export async function updateResearchSession(
  sessionId: string, 
  updates: Partial<ResearchSession>
): Promise<void> {
  const fields = Object.keys(updates).filter(key => key !== 'id');
  const values = fields.map(field => (updates as any)[field]);
  
  if (fields.length === 0) return;
  
  const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(', ');
  
  await query(
    `UPDATE research_sessions 
     SET ${setClause}, updated_at = NOW()
     WHERE id = $1`,
    [sessionId, ...values]
  );
}

// Save Trade Data Leaks
export async function saveTradeDataLeaks(
  sessionId: string,
  clientId: string,
  leaks: TradeDataLeak[]
): Promise<void> {
  for (const leak of leaks) {
    await query(
      `INSERT INTO trade_data_leaks (
        research_session_id, client_id, source_url, platform_type, leak_type,
        status, risk_assessment, evidence_snippet, analysis_notes, 
        identified_trade_partners, discovered_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())`,
      [
        sessionId,
        clientId,
        leak.source_url,
        leak.platform_type,
        leak.leak_type,
        leak.status,
        leak.risk_assessment,
        leak.evidence_snippet,
        leak.analysis_notes,
        JSON.stringify(leak.identified_trade_partners)
      ]
    );
  }
}

// Log Research Query
export async function logResearchQuery(
  sessionId: string,
  queryText: string,
  queryType: string,
  resultsCount: number
): Promise<void> {
  await query(
    `INSERT INTO research_queries (research_session_id, query_text, query_type, results_count)
     VALUES ($1, $2, $3, $4)`,
    [sessionId, queryText, queryType, resultsCount]
  );
}

// Main AI Research Function
export async function executeDeepResearch(
  clientId: string,
  targetCompanyName: string
): Promise<{ sessionId: string; report: ResearchReport }> {
  const sessionId = await createResearchSession(clientId, targetCompanyName);
  
  try {
    // Update session to in_progress
    await updateResearchSession(sessionId, { status: 'in_progress' });
    
    // Initialize Gemini model with function calling
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      tools: [{
        functionDeclarations: [WEB_SEARCH_FUNCTION]
      }]
    });
    
    // Prepare the prompt with client name
    const prompt = TIER_4_PROMPT.replace(/{CLIENT_NAME}/g, targetCompanyName);
    
    console.log(`🚀 Starting Tier-4 deep research for: ${targetCompanyName}`);
    
    // Start the conversation
    const chat = model.startChat();
    
    // Track function calls and queries
    let totalQueries = 0;
    let totalUrlsAnalyzed = 0;
    const allQueries: string[] = [];
    
    // Send the initial prompt
    let result = await chat.sendMessage(prompt);
    
    // Handle function calls
    while (result.response.functionCalls()) {
      const functionCalls = result.response.functionCalls();
      const functionResponses = [];
      
      for (const call of functionCalls) {
        if (call.name === 'webSearch') {
          const { query, phase } = call.args as { query: string; phase: string };
          
          // Execute the search
          const searchResult = await webSearch(query, phase);
          totalQueries++;
          totalUrlsAnalyzed += searchResult.count;
          allQueries.push(query);
          
          // Log the query
          await logResearchQuery(sessionId, query, phase, searchResult.count);
          
          functionResponses.push({
            name: 'webSearch',
            response: searchResult
          });
        }
      }
      
      // Send function responses back to the model
      result = await chat.sendMessage(functionResponses);
    }
    
    // Parse the final response as JSON
    const responseText = result.response.text();
    console.log('🤖 AI Response:', responseText);
    
    let report: ResearchReport;
    try {
      // Extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in AI response');
      }
      
      report = JSON.parse(jsonMatch[0]);
      
      // Validate the report structure
      if (!report.verified_leaks || !Array.isArray(report.verified_leaks)) {
        throw new Error('Invalid report structure: missing verified_leaks array');
      }
      
      if (!report.research_summary) {
        report.research_summary = {
          queries_performed: allQueries,
          total_searches: totalQueries,
          urls_analyzed: totalUrlsAnalyzed
        };
      }
      
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      throw new Error('Failed to parse research report from AI response');
    }
    
    // Save the leaks to database
    if (report.verified_leaks.length > 0) {
      await saveTradeDataLeaks(sessionId, clientId, report.verified_leaks);
    }
    
    // Update session with final results
    await updateResearchSession(sessionId, {
      status: 'completed',
      completed_at: new Date(),
      total_queries: totalQueries,
      total_urls_analyzed: totalUrlsAnalyzed,
      verified_leaks_count: report.verified_leaks.filter(l => l.status === 'Verified Leak').length,
      potential_leaks_count: report.verified_leaks.filter(l => l.status === 'Potential Leak - Manual Review Required').length,
      research_metadata: {
        ai_model: 'gemini-1.5-pro',
        protocol_version: 'tier-4-v2',
        total_function_calls: totalQueries
      }
    });
    
    console.log(`✅ Research completed: ${report.verified_leaks.length} leaks found`);
    
    return { sessionId, report };
    
  } catch (error) {
    console.error('Research execution error:', error);
    
    // Update session with error
    await updateResearchSession(sessionId, {
      status: 'failed',
      completed_at: new Date(),
      error_message: error instanceof Error ? error.message : 'Unknown error'
    });
    
    throw error;
  }
}

// Get Research Sessions for Client
export async function getClientResearchSessions(clientId: string): Promise<ResearchSession[]> {
  const sessions = await query<ResearchSession>(
    `SELECT * FROM research_sessions 
     WHERE client_id = $1 
     ORDER BY created_at DESC`,
    [clientId]
  );
  
  return sessions;
}

// Get Trade Data Leaks for Client
export async function getClientTradeDataLeaks(clientId: string): Promise<any[]> {
  const leaks = await query(
    `SELECT 
      tdl.*,
      rs.target_company_name,
      rs.started_at as research_date
     FROM trade_data_leaks tdl
     JOIN research_sessions rs ON rs.id = tdl.research_session_id
     WHERE tdl.client_id = $1
     ORDER BY tdl.discovered_at DESC`,
    [clientId]
  );
  
  return leaks;
}

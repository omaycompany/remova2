import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import { getAuthenticatedClient } from '@/lib/auth';
import { sendTeamNotification } from '@/lib/email';

const intakeSchema = z.object({
  // Company Information
  companyName: z.string().min(1),
  legalCompanyName: z.string().min(1),
  companyType: z.enum(['corporation', 'llc', 'partnership', 'sole_proprietorship', 'other']),
  foundedYear: z.string().min(4),
  employeeCount: z.string().min(1),
  annualRevenue: z.string().optional(),
  website: z.string().optional(),
  
  // Business Details
  primaryIndustry: z.string().min(1),
  products: z.string().min(1),
  services: z.string().optional(),
  targetMarkets: z.array(z.string()),
  
  // Contact Information
  primaryContactName: z.string().min(1),
  primaryContactTitle: z.string().min(1),
  primaryContactEmail: z.string().email(),
  primaryContactPhone: z.string().optional(),
  companyAddress: z.string().min(1),
  
  // Trade Information
  importExportActivity: z.enum(['imports', 'exports', 'both', 'neither']),
  primaryTradingPartners: z.string().optional(),
  keySuppliers: z.string().optional(),
  tradingVolume: z.string().optional(),
  
  // Privacy Concerns
  currentPrivacyConcerns: z.string().min(1),
  previousDataLeaks: z.boolean(),
  previousDataLeaksDetails: z.string().optional(),
  sensitiveBusinessInfo: z.string().min(1),
  competitorConcerns: z.string().optional(),
  
  // Service Preferences
  urgencyLevel: z.enum(['immediate', 'within_week', 'within_month', 'standard']),
  preferredCommunication: z.enum(['email', 'phone', 'slack', 'teams']),
  notificationPreferences: z.array(z.string()),
  
  // Additional Information
  specialRequirements: z.string().optional(),
  additionalComments: z.string().optional(),
  
  // Plan information
  plan: z.enum(['stealth', 'vanish', 'shield'])
});

export async function POST(request: NextRequest) {
  try {
    // Authenticate the user
    const client = await getAuthenticatedClient(request);
    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in to access this feature.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const intakeData = intakeSchema.parse(body);

    console.log('Intake form submission:', { clientId: client.id, plan: intakeData.plan });

    // Store intake data in database
    try {
      await query(
        `INSERT INTO client_intake_forms (
          client_id, 
          company_name, 
          legal_company_name, 
          company_type, 
          founded_year, 
          employee_count, 
          annual_revenue, 
          website,
          primary_industry, 
          products, 
          services, 
          target_markets, 
          primary_contact_name, 
          primary_contact_title, 
          primary_contact_email, 
          primary_contact_phone, 
          company_address,
          import_export_activity, 
          primary_trading_partners, 
          key_suppliers, 
          trading_volume,
          current_privacy_concerns, 
          previous_data_leaks, 
          previous_data_leaks_details, 
          sensitive_business_info, 
          competitor_concerns,
          urgency_level, 
          preferred_communication, 
          notification_preferences, 
          special_requirements, 
          additional_comments,
          plan,
          submitted_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
          $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, 
          $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, 
          $31, $32, $33, NOW()
        )`,
        [
          client.id,
          intakeData.companyName,
          intakeData.legalCompanyName,
          intakeData.companyType,
          intakeData.foundedYear,
          intakeData.employeeCount,
          intakeData.annualRevenue || null,
          intakeData.website || null,
          intakeData.primaryIndustry,
          intakeData.products,
          intakeData.services || null,
          JSON.stringify(intakeData.targetMarkets),
          intakeData.primaryContactName,
          intakeData.primaryContactTitle,
          intakeData.primaryContactEmail,
          intakeData.primaryContactPhone || null,
          intakeData.companyAddress,
          intakeData.importExportActivity,
          intakeData.primaryTradingPartners || null,
          intakeData.keySuppliers || null,
          intakeData.tradingVolume || null,
          intakeData.currentPrivacyConcerns,
          intakeData.previousDataLeaks,
          intakeData.previousDataLeaksDetails || null,
          intakeData.sensitiveBusinessInfo,
          intakeData.competitorConcerns || null,
          intakeData.urgencyLevel,
          intakeData.preferredCommunication,
          JSON.stringify(intakeData.notificationPreferences),
          intakeData.specialRequirements || null,
          intakeData.additionalComments || null,
          intakeData.plan
        ]
      );

      console.log(`Intake form saved for client: ${client.id}`);
    } catch (dbError) {
      console.error('Database error saving intake form:', dbError);
      return NextResponse.json(
        { error: 'Failed to save intake form' },
        { status: 500 }
      );
    }

    // Update client status to indicate intake completed
    try {
      await query(
        'UPDATE clients SET intake_completed = true, updated_at = NOW() WHERE id = $1',
        [client.id]
      );
    } catch (updateError) {
      console.error('Error updating client intake status:', updateError);
      // Don't fail the request for this
    }

    // Send notification to team
    const urgencyEmoji = {
      immediate: '🚨',
      within_week: '⚡',
      within_month: '📅',
      standard: '✅'
    };

    await sendTeamNotification(
      `${urgencyEmoji[intakeData.urgencyLevel]} ${intakeData.plan.toUpperCase()} Intake Completed: ${intakeData.companyName}`,
      `
        <h2>New ${intakeData.plan.toUpperCase()} Intake Form Completed</h2>
        
        <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #1f2937;">Company Information:</h3>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Company:</strong> ${intakeData.companyName}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Legal Name:</strong> ${intakeData.legalCompanyName}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Industry:</strong> ${intakeData.primaryIndustry}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Size:</strong> ${intakeData.employeeCount} employees</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Plan:</strong> ${intakeData.plan.toUpperCase()}</p>
        </div>

        <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #92400e;">Contact Information:</h3>
          <p style="margin: 5px 0; color: #92400e;"><strong>Name:</strong> ${intakeData.primaryContactName}</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Title:</strong> ${intakeData.primaryContactTitle}</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Email:</strong> ${intakeData.primaryContactEmail}</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Phone:</strong> ${intakeData.primaryContactPhone || 'Not provided'}</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Communication:</strong> ${intakeData.preferredCommunication}</p>
        </div>

        <div style="background-color: #fef2f2; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #991b1b;">Urgency & Privacy Concerns:</h3>
          <p style="margin: 5px 0; color: #991b1b;"><strong>Urgency:</strong> ${intakeData.urgencyLevel.replace('_', ' ').toUpperCase()}</p>
          <p style="margin: 5px 0; color: #991b1b;"><strong>Trade Activity:</strong> ${intakeData.importExportActivity}</p>
          <p style="margin: 5px 0; color: #991b1b;"><strong>Previous Data Leaks:</strong> ${intakeData.previousDataLeaks ? 'YES' : 'No'}</p>
          <div style="margin: 10px 0;">
            <strong>Privacy Concerns:</strong>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              ${intakeData.currentPrivacyConcerns}
            </div>
          </div>
        </div>

        <div style="background-color: #ecfdf5; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #065f46;">Business Details:</h3>
          <div style="margin: 10px 0;">
            <strong>Products:</strong>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              ${intakeData.products}
            </div>
          </div>
          <p style="margin: 5px 0; color: #065f46;"><strong>Target Markets:</strong> ${intakeData.targetMarkets.join(', ')}</p>
          ${intakeData.primaryTradingPartners ? `<p style="margin: 5px 0; color: #065f46;"><strong>Trading Partners:</strong> ${intakeData.primaryTradingPartners}</p>` : ''}
        </div>

        ${intakeData.specialRequirements ? `
        <div style="background-color: #ede9fe; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="margin: 0 0 15px 0; color: #581c87;">Special Requirements:</h3>
          <div style="background-color: white; padding: 10px; border-radius: 4px;">
            ${intakeData.specialRequirements}
          </div>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #4b5563;"><strong>Next Steps:</strong> Activate ${intakeData.plan} protection services and begin implementation.</p>
          <p style="color: #6b7280; font-size: 12px;">Client ID: ${client.id} | Submitted: ${new Date().toLocaleString()}</p>
        </div>
      `
    );

    return NextResponse.json({
      success: true,
      message: 'Intake form submitted successfully',
      intakeCompleted: true
    });

  } catch (error) {
    console.error('Intake form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit intake form' },
      { status: 500 }
    );
  }
}

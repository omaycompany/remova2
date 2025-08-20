import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = String(formData.get("email") || "").trim();
    const organization = String(formData.get("organization") || "").trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !organization) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Welcome email stub (no external service; just log)
    const subject = "Welcome to Remova.org Free Membership";
    const body = `Welcome! You now have access to our free tools and resources.\n\nEmail: ${email}\nOrganization: ${organization}\n\nNext steps: Explore docs and tools, and upgrade anytime.`;
    console.log("[FreeMembershipSignup]", { email, organization, subject, body });

    return NextResponse.json({ message: "Welcome! Check your inbox for a confirmation (stub)." });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
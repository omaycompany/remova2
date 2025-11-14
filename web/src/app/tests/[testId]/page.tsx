// Server component wrapper for static export
import TestClient from './TestClient';

// Required for static export
export async function generateStaticParams() {
  return [
    { testId: 'trade-data-exposure-assessment' },
    { testId: 'customer-data-protection-audit' },
    { testId: 'employee-surveillance-exposure' },
    { testId: 'third-party-data-sharing-audit' },
    { testId: 'digital-footprint-analysis' },
    { testId: 'iot-device-security-assessment' },
    { testId: 'competitive-intelligence-vulnerability' },
    { testId: 'social-media-privacy-audit' },
    { testId: 'financial-data-security-test' },
    { testId: 'gdpr-compliance-readiness' },
  ];
}

interface TestPageProps {
  params: Promise<{ testId: string }>;
}

export default async function TestPage({ params }: TestPageProps) {
  const { testId } = await params;
  return <TestClient testId={testId} />;
}

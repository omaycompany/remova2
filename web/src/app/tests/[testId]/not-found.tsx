import Link from 'next/link';

export default function TestNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Test Not Found</h1>
        <p className="text-gray-600 mb-8">
          The privacy assessment test you're looking for doesn't exist or may have been moved.
        </p>
        <div className="space-y-4">
          <Link href="/tests" className="btn btn-primary w-full">
            View All Tests
          </Link>
          <Link href="/" className="btn btn-outline w-full">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

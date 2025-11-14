'use client';

// This is a placeholder - the full component code needs to be restored
// The original component was moved here to support static export with generateStaticParams

export default function TestClient({ testId }: { testId: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Test: {testId}</h1>
            <p className="text-gray-600">The full test component needs to be restored here.</p>
            <p className="text-sm text-gray-500 mt-4">This is a temporary placeholder to fix the build error.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


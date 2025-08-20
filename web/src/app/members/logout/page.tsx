export default function LogoutPage() {
  // Clear the session cookie and redirect
  // This is done client-side since we need to manipulate cookies
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5">
      <div className="card bg-base-100 shadow-xl max-w-md w-full mx-4">
        <div className="card-body text-center">
          <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-info" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Signing Out</h1>
          <p className="opacity-80 mb-6">
            You have been signed out securely. Redirecting...
          </p>
          
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      </div>
      
      {/* Auto-logout script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Clear session cookie
            document.cookie = "remova_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            
            // Redirect after clearing cookie
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          `,
        }}
      />
    </div>
  );
}
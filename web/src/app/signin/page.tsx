import LoginForm from '@/components/LoginForm';

export const metadata = {
  title: 'Sign In - Remova.org',
  description: 'Access your Remova dashboard with your magic link login.',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50/20 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome Back
          </h1>
          <p className="text-lg text-gray-600">
            We'll send you a secure magic link to access your dashboard
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <LoginForm />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account yet?{' '}
              <a href="/become-member" className="font-semibold text-primary hover:text-primary-focus transition-colors">
                Join Remova
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">🔐 Secure Login</h3>
            <p className="text-sm text-gray-600">
              We use magic links instead of passwords for enhanced security. 
              Simply enter your email and we'll send you a secure login link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

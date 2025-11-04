import { redirect } from 'next/navigation';

// DISABLED: Service business model - redirecting to contact page
// Existing members can still access dashboard via direct dashboard links.
//
// ROLLBACK INSTRUCTIONS:
// To restore the original signin page, retrieve the original content from git history:
// git show HEAD~1:web/src/app/signin/page.tsx > web/src/app/signin/page.tsx
// (adjust HEAD~1 to the appropriate commit before this transformation)

export default function SignInPage() {
  redirect('/contact');
}

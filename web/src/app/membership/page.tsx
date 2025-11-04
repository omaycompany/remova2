import { redirect } from 'next/navigation';

// DISABLED: Service business model - redirecting to services page
// This membership page has been disabled as part of the transition to a consultation-based service model.
//
// ROLLBACK INSTRUCTIONS:
// To restore the original membership page, retrieve the original content from git history:
// git show HEAD~1:web/src/app/membership/page.tsx > web/src/app/membership/page.tsx
// (adjust HEAD~1 to the appropriate commit before this transformation)

export default function MembershipPage() {
  redirect('/services');
}

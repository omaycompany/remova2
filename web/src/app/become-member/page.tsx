import { redirect } from 'next/navigation';

// DISABLED: Service business model - redirecting to contact page
// This page has been disabled as part of the transition to a consultation-based service model.
//
// ROLLBACK INSTRUCTIONS:
// To restore the original become-member page, retrieve the original content from git history:
// git show HEAD~1:web/src/app/become-member/page.tsx > web/src/app/become-member/page.tsx
// (adjust HEAD~1 to the appropriate commit before this transformation)

export default function BecomeMemberPage() {
  redirect('/contact');
}

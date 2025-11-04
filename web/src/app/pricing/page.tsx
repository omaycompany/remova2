import { redirect } from 'next/navigation';

// Redirect to services page (service business model)
export default function Pricing() {
  redirect('/services');
}
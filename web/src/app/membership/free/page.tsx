import { redirect } from 'next/navigation';

export default async function FreeRedirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;

  // Preserve any existing query params (e.g., ?redirect=/members/anonymity-checker)
  const qs = new URLSearchParams(
    Object.entries(params).reduce((acc, [k, v]) => {
      if (typeof v === 'string' && v.length > 0) acc[k] = v;
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  redirect(`/signin${qs ? `?${qs}` : ''}`);
}
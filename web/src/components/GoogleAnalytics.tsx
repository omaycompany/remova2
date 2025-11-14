import Script from 'next/script'

export default function GoogleAnalytics() {
  // Only load Google Analytics in production
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'AW-17514795753';
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YR03QTP6EC';

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
            ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ''}
          `,
        }}
      />
    </>
  )
}

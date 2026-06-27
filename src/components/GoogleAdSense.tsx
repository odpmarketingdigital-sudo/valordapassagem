import Script from "next/script";

const ADSENSE_CLIENT = "ca-pub-9413465719918520";

export function GoogleAdSense() {
  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

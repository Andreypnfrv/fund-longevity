import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import { defaultOgImage, siteUrl } from "@/lib/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });

const defaultTitle = "Fund Longevity";
const defaultDescription = "A Global Rally for Life Extension";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: "%s | Fund Longevity" },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: defaultTitle,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: defaultOgImage, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${plusJakarta.variable} ${plusJakarta.className}`} suppressHydrationWarning>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7LR63S3RKN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7LR63S3RKN');
          `}
        </Script>
      </body>
    </html>
  );
}

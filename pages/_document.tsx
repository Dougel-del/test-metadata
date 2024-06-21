/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Sparkplan - The AI Copilot for Product Managers</title>
        <meta
          name="title"
          content="Sparkplan - The AI Copilot for Product Managers"
        />
        <meta
          name="description"
          content="Save hundreds of hours with our AI Toolbox for Product Managers. With 40+ AI tools and 10+ use cases, Sparkplan streamlines your daily tasks, from market research and competitor analysis to market segmentation and product strategy. Maximize efficiency, make informed decisions, and propel your success with Sparkplan, your reliable partner in product management."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sparkplan.ai/product-managers"
        />
        <meta
          property="og:title"
          content="Sparkplan - The AI Copilot for Product Managers"
        />
        <meta
          property="og:description"
          content="Save hundreds of hours with our AI Toolbox for Product Managers. With 40+ AI tools and 10+ use cases, Sparkplan streamlines your daily tasks, from market research and competitor analysis to market segmentation and product strategy. Maximize efficiency, make informed decisions, and propel your success with Sparkplan, your reliable partner in product management."
        />
        <meta property="og:image" content="/meta-image.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://sparkplan.ai/product-managers"
        />
        <meta
          property="twitter:title"
          content="Sparkplan - The AI Copilot for Product Managers"
        />
        <meta
          property="twitter:description"
          content="Save hundreds of hours with our AI Toolbox for Product Managers. With 40+ AI tools and 10+ use cases, Sparkplan streamlines your daily tasks, from market research and competitor analysis to market segmentation and product strategy. Maximize efficiency, make informed decisions, and propel your success with Sparkplan, your reliable partner in product management."
        />
        <meta property="twitter:image" content="/meta-image.png" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KRNCGE8PQS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-KRNCGE8PQS');
        `}
        </Script>

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

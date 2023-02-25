import Layout from "../components/Layout";
import { Ubuntu } from "@next/font/google";
import Seo from "../components/Seo";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps, canonical }) {
  return (
    <div className={ubuntu.className}>
      <Layout>
        <Seo />
        {/* Google Adsense */}
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1631589287644567" />

        {/* Google Analytics */}
        <Script
          strategy={"afterInteractive"}
          src={`https://www.googletagmanager.com/gtag/js?id=G-85JG1VBV2R`}
        />
        <Script
          id={"google-analytics"}
          strategy={"afterInteractive"}
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-85JG1VBV2R');
          `,
          }}
        />
        <NextNProgress
          color="#EE2233"
          options={{
            showSpinner: false,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

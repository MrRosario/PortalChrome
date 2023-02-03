import Layout from "../components/Layout";
import { Ubuntu } from "@next/font/google";
import Seo from "../components/Seo";
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
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

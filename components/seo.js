import Head from "next/head";
import { SITE_NAME, SITE_DOMAIN, DEFAULT_OG_IMAGE } from "../resources/utils";

export default function Seo({
  title = SITE_NAME,
  description = "A sua melhor fonte on-line para tutoriais, análises e notícias relacionadas a Chromebooks, Chrome OS, Google Chrome e tudo relaciondo a Google.",
  canonical = SITE_DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "@GenioRosario94",
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="pt_BR" />
      <meta key="og_site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og_url" property="og:url" content={canonical ?? SITE_DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og_image" property="og:image" content={ogImage} />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${SITE_NAME}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta name="twitter:image" property="twitter:image" content={ogImage} />

      <link rel="canonical" href={canonical ?? SITE_DOMAIN} />
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  );
}

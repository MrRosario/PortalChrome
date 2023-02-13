const EXTERNAL_DATA_URL = `${process.env.BASE_URL}/api/posts`;
const BASE_URL = "https://www.portalchrome.com.br";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/chromebooks</loc>
     </url>
     <url>
       <loc>${BASE_URL}/chrome-browser</loc>
     </url>
     <url>
       <loc>${BASE_URL}/gaming</loc>
     </url>
     <url>
       <loc>${BASE_URL}/chrome-os</loc>
     </url>
     <url>
       <loc>${BASE_URL}/programming</loc>
     </url>
     ${posts?.data
       .map((item) => {
         const slug = item?.attributes?.slug;
         return `
            <url>
                <loc>${BASE_URL}/${slug}</loc>
            </url>
        `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

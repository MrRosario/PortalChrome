import PostCards from "../components/PostCards";

export default function Home({ posts, BASE_URL }) {
  return (
    <>
      <PostCards BASE_URL={BASE_URL} highlightedPosts={posts} />
    </>
  );
}

const BASE_URL = process.env.BASE_URL;

export async function getServerSideProps() {
  const response = await fetch(
    `${BASE_URL}/api/posts?populate=*&filters[highlighted][$eq]=true&sort=createdAt%3Adesc&pagination[limit]=5`
  );
  const data = await response.json();
  const posts = data?.data;

  return {
    props: {
      posts,
      BASE_URL,
    },
  };
}

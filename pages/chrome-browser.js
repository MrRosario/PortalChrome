import HeadingContent from '../components/HeadingContent';
import PostCards from '../components/PostCards';

export default function ChromeBrowser({ posts, BASE_URL }) {
  return (
    <>
      <HeadingContent
        title='GOOGLE CHROME'
        content='O Google Chrome é o navegador da Web mais popular do mercado, por isso achamos que 
        seria uma boa ideia ver o que ele pode fazer por você. 
        Certifique-se de marcar a página como favorita e continue visitando para descobrir o 
        que há de novo no Google Chrome.'
      />
      <PostCards 
        BASE_URL={BASE_URL} 
        highlightedPosts={posts} 
      />
    </>
  )
}

const BASE_URL = process.env.BASE_URL;

export async function getServerSideProps() {
  const response = await fetch(`${BASE_URL}/api/posts?populate=*&filters[category][$eq]=GoogleChrome&sort=createdAt%3Adesc&pagination[limit]=5`)
  const data = await response.json()
  const posts = data?.data;

  return { 
    props: { 
      posts,
      BASE_URL
    } 
  }
}
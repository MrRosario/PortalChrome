import HeadingContent from '../components/HeadingContent'
import PostCards from '../components/PostCards';

export default function Programming({ posts, BASE_URL }) {
  return (
    <>
      <HeadingContent
        title='PROGRAMAÇÃO'
        content='Programação no Chromebook é possível com a ajuda do Linux. Linux é um sistema operacional 
        gratuito e de código aberto e vem pré-instalado em um Chromebook. Linux permite que os usuários usem suas 
        habilidades de programação em seus Chromebooks. O Portal Chrome abrange uma ampla variedade de tutoriais 
        sobre como configurar o Linux e outros softwares relacionados à programação no Chromebook.'
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
  const response = await fetch(`${BASE_URL}/api/posts?populate=*&filters[category][$eq]=Programming&sort=createdAt%3Adesc&pagination[limit]=5`)
  const data = await response.json()
  const posts = data?.data;

  return { 
    props: { 
      posts,
      BASE_URL
    } 
  }
}
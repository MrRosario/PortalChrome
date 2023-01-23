import HeadingContent from '../components/HeadingContent'
import PostCards from '../components/PostCards';

export default function Chromebooks({ posts, BASE_URL }) {
  return (
    <>
      <HeadingContent
        title='CHROMEBOOKS'
        content='Chromebooks são muito populares entre estudantes, professores e empresários. 
        Eles facilitam a conexão on-line em qualquer lugar. Eles são duráveis ​​e exigem pouca manutenção. 
        Os Chromebooks são construídos como computadores, mas funcionam como smartphones. 
        Todos os seus aplicativos favoritos estão na Chrome Web Store, incluindo aqueles desenvolvidos pelo Google e por desenvolvedores terceirizados. 
        Os Chromebooks executam o sistema operacional Chrome OS — muitos aplicativos que você usa 
        diariamente também estão disponíveis no Android, então você se acostuma rapidamente. 
        Você está procurando recursos do Chromebook? Precisa de ajuda com um Chromebook? Abaixo está a lista de artigos, 
        análises e dicas para ajudá-lo a começar sua jornada no Chromebook ou aproveitar melhor um Chromebook que você já usa.'
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

  const response = await fetch(`${BASE_URL}/api/posts?populate=*&filters[category][$eq]=Chromebooks&sort=createdAt%3Adesc&pagination[limit]=5`)
  const data = await response.json()
  const posts = data?.data;

  return { 
    props: { 
      posts,
      BASE_URL,
    } 
  }
}
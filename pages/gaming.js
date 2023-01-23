import PostCards from '../components/PostCards';
import HeadingContent from '../components/HeadingContent';

export default function Gaming({ posts, BASE_URL }) {
  return (
    <>
      <HeadingContent
        title='JOGOS'
        content='E aí, jogador! Você está procurando Chromebooks dedicados para jogos? 
        Talvez você se pergunte se é possível jogar jogos de PC em um Chromebook. 
        Nós cobrimos você! Abaixo estão nossos artigos que você pode querer ler. 
        Manteremos esta página atualizada com novos conteúdos regularmente, portanto, 
        certifique-se de marcar e continuar visitando a página.'
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
  const response = await fetch(`${BASE_URL}/api/posts?populate=*&filters[category][$eq]=Gaming&sort=createdAt%3Adesc&pagination[limit]=5`)
  const data = await response.json()
  const posts = data?.data;

  return { 
    props: { 
      posts,
      BASE_URL
    } 
  }
}
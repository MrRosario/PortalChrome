import HeadingContent from '../components/HeadingContent'
import PostCards from '../components/PostCards';

export default function ChromeOS({ posts, BASE_URL }) {
  return (
    <>
      <HeadingContent
        title='CHROME OS'
        content='O Chrome OS é um sistema operacional projetado pelo Google que usa o kernel Linux de código aberto e 
        outros softwares de código aberto. Ele foi feito para rodar no navegador web Chrome, e agora é capaz de rodar 
        sozinho sem navegador, além de seu propósito óbvio de funcionar como um aplicativo para navegar na web. 
        O sistema operacional é baseado no Chromium OS e usa o navegador Google Chrome. Possui excelentes ferramentas 
        on-line disponíveis para todos os usuários que usam o Chrome como navegador da Web ou o Chromebook como sistema 
        operacional. Nós do Portal Chrome temos dicas, truques, instruções e guias de solução de problemas para você 
        aprimorar sua experiência com o Chrome OS.'
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
  const response = await fetch(`${BASE_URL}/api/posts?populate=*&filters[category][$eq]=ChromeOS&sort=createdAt%3Adesc&pagination[limit]=5`)
  const data = await response.json()
  const posts = data?.data;

  return { 
    props: { 
      posts,
      BASE_URL
    } 
  }
}
import React, { useEffect } from "react";
import MarkdownIt from 'markdown-it';
import dynamic from 'next/dynamic'
import Link from "next/link";
import { DateFormate, InsertTargetBlank, CurrentCategory } from '../resources/utils';
import Aside from '../components/Aside';
import WhatsappIcon from '../components/WhatsappIcon';
import EmailIcon from '../components/EmailIcon';
import FacebookIcon from '../components/FacebookIcon';
import TwitterIcon from '../components/TwitterIcon';
import styles from '../styles/Post.module.css';

const Banner = dynamic(() => import('../components/Banner'), {
  loading: () => 'Carregando...',
})

export default function Post({ blogPost, author, BASE_URL }) {

  const attributes = blogPost?.data?.attributes;
  const { category, createdAt, updatedAt, description, title, content, banner, slug } = attributes;
  const { formats } = banner?.data?.attributes;
  const { url, height } = formats?.medium;
  const bannerUrl = `${BASE_URL}${url}`;

  const md = new MarkdownIt();
  const htmlContentResult = md.render(content);
  const categoryData = CurrentCategory(category)

  useEffect(() => {
    InsertTargetBlank();
  },[]);

  return (
    <article className={styles.post}>
      <header className={styles.post__heading}>
        <div className={styles.post__category}>
          <Link href={categoryData.url}>
            {categoryData.name}
          </Link>     
        </div>
        <h1 className={styles.post__title}>
          {title}
        </h1>
        <h3 className={styles.post__description}>
          {description}
        </h3>
        <div className={styles.post__info}>
          <div className={styles.authorDate}>
            <div className={styles.post__author}>
              <span>por:</span>
              <span>{author}</span>
            </div>
            <div className={styles.post__createdAt}>
              <span>|</span>
              <span>{DateFormate(createdAt)}</span>
            </div>
            { DateFormate(updatedAt) !== DateFormate(createdAt) && (
              <div className={styles.post__updatedAt}>
                <span>|</span>
                <span>atualizado em: {DateFormate(updatedAt)}</span>
              </div>
            )}
          </div>
          <div className={styles.social}>
            <a 
              href={`https://api.whatsapp.com/send?text=/${slug}`}
              rel="noopener"
              target="_blank"
              className={styles.social__icon}
            >
              <WhatsappIcon />
            </a>
            <a 
              target="_blank" 
              rel="noopener"
              href="#" 
              className={styles.social__icon}
            >
              <FacebookIcon />
            </a>
            <a 
              href="#" 
              rel="noopener"
              className={styles.social__icon}
            >
              <TwitterIcon />
            </a>
            <a 
              target="_blank"
              rel="noopener"
              href="#" 
              className={styles.social__icon}
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </header>
      { banner && (
        <Banner 
          bannerUrl={bannerUrl} 
          alternativeText={slug}  
          height={height}
        />
      )}
      <div className={styles.post__contentWrapper}>
        <section 
          id="post__content"
          className={styles.post__content}
          dangerouslySetInnerHTML={{ __html: htmlContentResult }}>
        </section>
        
        <Aside BASE_URL={BASE_URL} />
      </div>
    </article>
  )
}

const BASE_URL = process.env.BASE_URL;

export async function getServerSideProps(context) {

  const slug = context.params.slug;

  const post = await fetch(`${BASE_URL}/api/posts/${slug}?populate=*`)
  const parsedPost = await post.json()

  const author = await fetch(`${BASE_URL}/api/authors/${parsedPost?.data?.attributes?.authorID}`)
  const parsedAuthor = await author.json()
  const { name } = parsedAuthor?.data?.attributes;  
  
  return { 
    props: { 
      blogPost: parsedPost, 
      author: name, 
      BASE_URL
    } 
  }
}

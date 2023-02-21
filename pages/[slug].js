import React, { useEffect } from "react";
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  DateFormate,
  InsertAttrToAnchorTag,
  CurrentCategory,
  SITE_NAME,
  SITE_DOMAIN,
  DeviceCheck,
} from "../resources/utils";
import Aside from "../components/Aside";
import Seo from "../components/Seo";
import WhatsappIcon from "../components/WhatsappIcon";
import ShareIcon from "../components/ShareIcon";
import FacebookIcon from "../components/FacebookIcon";
import TwitterIcon from "../components/TwitterIcon";
import styles from "../styles/Post.module.css";

const Banner = dynamic(() => import("../components/Banner"), {
  loading: () => "Carregando...",
});

export default function Post({ blogPost, author, BASE_URL }) {
  const attributes = blogPost?.data?.attributes;
  const {
    category,
    createdAt,
    updatedAt,
    description,
    title,
    content,
    banner,
    slug,
  } = attributes;
  const { formats } = banner?.data?.attributes;
  const { url } = formats?.medium;
  const bannerUrl = url;

  const device = DeviceCheck();
  const md = new MarkdownIt();

  md.renderer.rules.image = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(
      token.children,
      options,
      env
    );

    token.attrSet("loading", "lazy");

    return slf.renderToken(tokens, idx, options);
  };

  const htmlContentResult = md.render(content);
  const categoryData = CurrentCategory(category);
  const currentUrl = `${SITE_DOMAIN}/${slug}`;
  const messageIntroLink = `Veja este artigo: ${title}`;

  const webShare = async (e) => {
    e.preventDefault();
    try {
      await navigator.share({
        title: title,
        text: !description ? messageIntroLink : description,
        url: currentUrl,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    InsertAttrToAnchorTag();
  }, []);

  return (
    <>
      <Seo
        title={`${title} | ${SITE_NAME}`}
        description={description || title}
        ogImage={bannerUrl}
      />
      <article className={styles.post}>
        <header className={styles.post__heading}>
          <div className={styles.post__category}>
            <Link href={categoryData.url}>{categoryData.name}</Link>
          </div>
          <h1 className={styles.post__title}>{title}</h1>
          <h3 className={styles.post__description}>{description}</h3>
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
              {DateFormate(updatedAt) !== DateFormate(createdAt) && (
                <div className={styles.post__updatedAt}>
                  <span>|</span>
                  <span>atualizado em: {DateFormate(updatedAt)}</span>
                </div>
              )}
            </div>
            <div className={styles.social}>
              {!device.isDesktop && (
                <button onClick={webShare} className={styles.social__icon}>
                  <ShareIcon />
                </button>
              )}
              <a
                href={`https://api.whatsapp.com/send?text=${currentUrl}`}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.social__icon}
              >
                <WhatsappIcon />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${messageIntroLink} - ${currentUrl}`}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.social__icon}
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&src=sdkpreparse&quote=${title}`}
                className={styles.social__icon}
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </header>
        {banner && <Banner bannerUrl={bannerUrl} alternativeText={slug} />}
        <div className={styles.post__contentWrapper}>
          <section
            id="post__content"
            className={styles.post__content}
            dangerouslySetInnerHTML={{ __html: htmlContentResult }}
          ></section>

          <Aside BASE_URL={BASE_URL} />
        </div>
      </article>
    </>
  );
}

const BASE_URL = process.env.BASE_URL;

export async function getServerSideProps(context) {
  try {
    const slug = context.params.slug;

    const post = await fetch(`${BASE_URL}/api/posts/${slug}?populate=*`);
    const parsedPost = await post.json();

    const author = await fetch(
      `${BASE_URL}/api/authors/${parsedPost?.data?.attributes?.authorID}`
    );
    const parsedAuthor = await author.json();
    const { name } = parsedAuthor?.data?.attributes;

    return {
      props: {
        blogPost: parsedPost,
        author: name,
        BASE_URL,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
}

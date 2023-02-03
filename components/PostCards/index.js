import React, { useState, useEffect } from "react";
import CardFeatured from "../CardFeatured";
import PostSeparator from "../PostSeparator";
import FallbackImage from "../../public/fallbackImg.svg";
import CardPost from "../CardPost";
import Aside from "../Aside";
import styles from "./PostCards.module.css";

export default function PostCards({ highlightedPosts, BASE_URL }) {
  const [recentPosts, setRecentPosts] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const PAGE_ENTRIES = 6;

  const fetchRecentPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/api/posts?sort=createdAt%3Adesc&pagination[page]=${pageNumber}&pagination[pageSize]=${PAGE_ENTRIES}&populate=*`
      );
      const parsedPosts = await res.json();
      const { data, meta } = parsedPosts;

      setPageCount(meta?.pagination?.pageCount);
      setRecentPosts([...recentPosts, ...data]);
    } catch (error) {
      setErrorMsg("Erro ao carregar posts recentes. Tente novamente.");
      console.warn("There was an error", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreRecentPosts = () => {
    setPageNumber(pageNumber + 1);
  };

  const setFeaturedItem = (type, index) => {
    if (type === "img") {
      const imgUrl =
        highlightedPosts[index]?.attributes?.thumbnail?.data?.attributes?.url;
      return imgUrl ? imgUrl : FallbackImage.src;
    }
    if (type === "title") {
      return highlightedPosts[index]?.attributes?.title;
    }
    if (type === "link") {
      return highlightedPosts[index]?.attributes?.slug;
    }
    return "";
  };

  useEffect(() => {
    fetchRecentPosts();
  }, [pageNumber]);

  return (
    <>
      <section className={styles.contentHighlighted}>
        <div className={styles.contentBigCardsWrapper}>
          <CardFeatured
            isCardBig={true}
            title={setFeaturedItem("title", 0)}
            goTopost={setFeaturedItem("link", 0)}
            img={setFeaturedItem("img", 0)}
          />
          <CardFeatured
            isCardBig={true}
            title={setFeaturedItem("title", 1)}
            goTopost={setFeaturedItem("link", 1)}
            img={setFeaturedItem("img", 1)}
          />
        </div>
        <div className={styles.contentSmallCardsWrapper}>
          <CardFeatured
            isCardBig={false}
            title={setFeaturedItem("title", 2)}
            goTopost={setFeaturedItem("link", 2)}
            img={setFeaturedItem("img", 2)}
          />
          <CardFeatured
            isCardBig={false}
            title={setFeaturedItem("title", 3)}
            goTopost={setFeaturedItem("link", 3)}
            img={setFeaturedItem("img", 3)}
          />
          <CardFeatured
            isCardBig={false}
            title={setFeaturedItem("title", 4)}
            goTopost={setFeaturedItem("link", 4)}
            img={setFeaturedItem("img", 4)}
          />
        </div>
      </section>

      {isLoading && <p className="loadingMsg"> Carregando... </p>}
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      {!errorMsg && !isLoading && (
        <section className={styles.contentOther}>
          <div className={styles.contentOther__main}>
            <PostSeparator title="Últimas publicações" />
            <div className={styles.contentBoxWrapper}>
              {recentPosts?.map((item) => {
                const { title, slug, banner } = item?.attributes;
                const { url } = banner?.data?.attributes || {};

                return (
                  <CardPost
                    key={item.id}
                    isCardBig={true}
                    title={title}
                    alternativeText={slug}
                    goTopost={slug}
                    img={url}
                  />
                );
              })}
            </div>
            {pageNumber !== pageCount && (
              <div className={styles.buttonLoadMoreWrapper}>
                <button
                  onClick={loadMoreRecentPosts}
                  className={styles.buttonLoadMore}
                >
                  {isLoading ? "Carregando..." : "Carregar mais"}
                </button>
              </div>
            )}
          </div>
          <Aside BASE_URL={BASE_URL} />
        </section>
      )}
    </>
  );
}

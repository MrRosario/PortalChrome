import React, { useEffect, useState } from "react";
import CardPost from "../CardPost";
import PostSeparator from "../PostSeparator";
import styles from "./Aside.module.css";

const Aside = ({ BASE_URL }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/posts?populate=*&filters[category][$eq]=Chromebooks&pagination[limit]=4`
      );
      const parsedPosts = await res.json();
      const { data } = parsedPosts;

      setPosts(data);
    } catch (error) {
      console.warn("There was an error", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <aside className={styles.contentOther__aside}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1631589287644567"
        data-ad-slot="2544103369"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <PostSeparator title="Outras publicações" />
      <div className={styles.contentBoxWrapper}>
        {posts?.map((item) => {
          const { id, attributes } = item;
          const { title, thumbnail, slug } = attributes;
          const image = thumbnail?.data?.attributes?.formats?.thumbnail?.url;
          return (
            <CardPost
              key={id}
              isCardBig={false}
              title={title}
              goTopost={slug}
              alternativeText={slug}
              img={image}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Aside;

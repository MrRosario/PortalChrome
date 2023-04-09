import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ bannerUrl, alternativeText }) => (
  <section className={`${styles.post__banner}`}>
    <img
      className="skeleton"
      src={bannerUrl}
      alt={!alternativeText ? "banner" : alternativeText}
      loading="lazy"
    />
  </section>
);

export default Banner;

import React from "react";
import styles from './Banner.module.css';

const Banner = ({ bannerUrl, alternativeText, height }) => (
  <section className={styles.post__banner}>
    <img 
      src={bannerUrl} 
      alt={!alternativeText ? 'banner' : alternativeText} 
      height={height} 
    />
  </section>
)

export default Banner;
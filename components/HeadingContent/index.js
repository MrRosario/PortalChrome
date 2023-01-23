import React from "react";
import styles from './HeadingContent.module.css';

const HeadingContent = ({ title, content }) => (
    <article className={styles.heading_content}>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
)
export default HeadingContent
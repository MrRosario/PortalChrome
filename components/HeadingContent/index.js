import React from "react";
import styles from './HeadingContent.module.css';

const HeadingContent = ({ title, content, children }) => (
    <article className={styles.heading_content}>
      <header>
        <h1>{title}</h1>
        { content && ( <p>{content}</p> ) }
      </header>
      <section className={styles.child__content}> {children} </section>
    </article>
)
export default HeadingContent
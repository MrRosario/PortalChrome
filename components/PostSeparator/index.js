import React from "react";
import styles from './PostSeparator.module.css';

const PostSeparator = ({ title }) => (
    <section className={styles.postSeparator}>
        <h3>{title}</h3>
        <div className={styles.postSeparator__line}>
            <div className={styles.postSeparator__smallLine}></div>
        </div>
    </section>
)
export default PostSeparator;
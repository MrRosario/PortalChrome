import React from "react";
import Link from "next/link";
import styles from './CardPost.module.css';

const CardPost = ({ isCardBig, title, img, goTopost, alternativeText }) => (
    <Link href={encodeURIComponent(goTopost)} className={`card ${styles.postCard} ${isCardBig ? styles.bigPostCard : styles.smallPostCard}`}>
        <div className={styles.postCard__imageLayer}>
            <img 
                loading="lazy"
                src={img} 
                alt={alternativeText} 
            />
        </div>
        <div className={styles.postCard__title}>
            <h2>{title}</h2>
        </div>
    </Link>
);

export default CardPost;
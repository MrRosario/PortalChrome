import React from "react";
import Link from "next/link";
import styles from './CardFeatured.module.css';
import FallbackImage from '../../public/fallbackImg.svg'

const CardFeatured = ({ isCardBig, img, title, goTopost }) => (
    <Link href={encodeURIComponent(goTopost)} className={`card ${isCardBig ? styles.bigCard : styles.smallCard}`}>
        <div className={styles.card__imageLayer}>
            <img 
                loading="lazy"
                src={!img ? FallbackImage : img} 
                alt={goTopost}
            />
        </div>
        <div className={styles.card__title}>
            <h2>{title}</h2>
        </div>
    </Link>
);

export default CardFeatured;
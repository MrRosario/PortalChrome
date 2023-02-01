import React from "react";
import Link from "next/link";
import styles from './Footer.module.css';

const Footer = () => {
    const routes = [
        { name: 'Sobre nós', path: '/about-us' },
        { name: 'Política de privacidade', path: '/privacy-policy' },
    ]
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__topContent}>
                {
                    routes.map(item => (
                        <Link 
                            key={item.name} 
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            <span className={styles.footer__middleInfo}>
                Chrome é uma marca registrada da Google Inc.
            </span>
            <div className={styles.footer__bottomContent}>
                <span>© Portal Chrome 2023</span>
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";
import Link from "next/link";
import styles from './Footer.module.css';

const Footer = () => {
    const routes = [
        { name: 'Sobre nós', path: '/about' },
        { name: 'Contato', path: '/contact' },
        { name: 'Política de privacidade', path: '/policies' },
        { name: 'Termos de uso', path: '/terms' },
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
                <span>
                    Feito com <Heart /> 
                    por
                    <a 
                        target='_blank'
                        href="https://www.instagram.com/eu_genio08/">Eugenio Rosario</a>
                </span>
            </div>
        </footer>
    )
}

const Heart = () => (
    <div className="heart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 22.7208L13.1834 21.9917C11.2973 20.2611 9.74171 18.7833 8.51671 17.5583C7.29172 16.3333 6.31949 15.2588 5.60005 14.3348C4.8806 13.4116 4.3801 12.5708 4.09855 11.8125C3.81622 11.0542 3.67505 10.2958 3.67505 9.53751C3.67505 8.07917 4.16622 6.85884 5.14855 5.87651C6.1301 4.89495 7.35005 4.40417 8.80838 4.40417C9.81949 4.40417 10.7676 4.66667 11.6527 5.19167C12.537 5.71667 13.3195 6.48473 14 7.49584C14.6806 6.48473 15.463 5.71667 16.3474 5.19167C17.2325 4.66667 18.1806 4.40417 19.1917 4.40417C20.65 4.40417 21.87 4.89495 22.8515 5.87651C23.8339 6.85884 24.325 8.06945 24.325 9.50834C24.325 10.2861 24.1843 11.0542 23.9027 11.8125C23.6204 12.5708 23.1242 13.4116 22.414 14.3348C21.7047 15.2588 20.7325 16.338 19.4974 17.5723C18.263 18.8074 16.7028 20.2806 14.8167 21.9917L14 22.7208Z" fill="#EE2233"/>
        </svg>
    </div>
)

export default Footer;
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Header/>
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
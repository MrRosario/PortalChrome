import Layout from '../components/Layout'
import { Ubuntu } from '@next/font/google';
import '../styles/globals.css'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300','400','500', '700']
});

export default function App({ Component, pageProps }) {
  return (
    <div className={ubuntu.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

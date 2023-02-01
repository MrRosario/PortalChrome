import HeadingContent from '../components/HeadingContent';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <>
            <HeadingContent  title='Página não encontrada'>
                <p style={{ textAlign: 'center' }}>
                    Por favor <Link href='/'> <strong>clique</strong> </Link>
                    para continuar navegando pelo site.
                </p>
            </HeadingContent>
        </>
    )
}

export default NotFoundPage

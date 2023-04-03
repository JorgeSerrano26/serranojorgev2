import Head from 'next/head'
import Footer from '@components/Footer'
import Header from '@components/Header'
import useIsNight from '@hooks/useNight';

const Layout: React.FC = ({ children }) => {
    const { icon, isNight } = useIsNight();
    return (<>
        <Head>
            <title>Jorge Serrano - {icon}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="I'am developer and this is my personal page. "
            />
            <meta name="author" content="Jorge Serrano" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        {/* <Header /> */}
        <main>
            {children}
        </main>
        <Footer />
    </>)
};


export default Layout;
import Head from 'next/head';
import isNight from '../../utils/isNight';
import Footer from '../Footer';
import Header from '../Header';

const Layout: React.FC = ({ children }) => (
    <>
        <Head>
            <title>Jorge Serrano - {isNight()}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="I'am developer and this is my personal page."
            />
            <meta name="author" content="Jorge Serrano" />
            <meta
                name="keywords"
                content="developer, portfolio, react, css, scss, kotlin, java, go, docker, senior, semi senior, junior, figma"
            />
            <meta name="description" content="150 words" />
            <meta name="subject" content="your website's subject" />
            <meta name="copyright" content="company name" />
            <meta name="language" content="en" />
            <meta name="robots" content="index,follow" />
            <meta name="Classification" content="Personal" />
            <meta name="designer" content="Jorge Serrano" />
            <meta name="copyright" content="Jorge Serrano" />
            <meta name="owner" content="Jorge Serrano" />
            <meta name="directory" content="submission" />
            <meta name="category" content="Porfolio" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <link rel="preload" href="/fonts/JetBrainsMono-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin='anonymous' />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;

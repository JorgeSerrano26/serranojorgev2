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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;1,300&family=Source+Code+Pro:wght@600;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;

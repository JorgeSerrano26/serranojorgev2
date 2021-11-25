import Head from 'next/head'
import isNight from '../../utils/isNight';
import Footer from '../Footer'
import Header from '../Header'

const Layout: React.FC = ({ children }) => (<>
    <Head>
        <title>Jorge Serrano - {isNight()}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
            name="description"
            content="I'am developer and this is my personal page. "
        />
        <meta name="author" content="Jorge Serrano" />
    </Head>
    <Header />
    <main>
        {children}
    </main>
    <Footer />
</>);


export default Layout;
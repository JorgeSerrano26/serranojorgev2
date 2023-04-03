import { useEffect } from 'react';
import Nav from './components/Nav';
import navItems from './components/Nav/navItems';
import useScrollHook from '@hooks/useScroll';

/**
 * Styles
 */
// import './Header.scss';
const nameSpace = "main_header";


const Header = () => {
    const { offsetY } = useScrollHook();

    useEffect(() => {
        if (offsetY > 0) {
            // Do something
        }
    }, [offsetY])

    return <header className={nameSpace}>
        <Nav items={navItems} />
    </header>
}

export default Header;
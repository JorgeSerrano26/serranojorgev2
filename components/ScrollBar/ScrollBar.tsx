import React, { useEffect } from 'react';
import styles from './styles.module.scss';

const ScrollBar = () => {
    const [width, setWidth] = React.useState<number>(0.01);

    const style: React.CSSProperties = {
        width: `${width}%`,
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;

            setWidth((scrolled / scrollable) * 100);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return <div className={styles.scroll_bar_container}>
        <span style={style}></span>
    </div>
};

export default ScrollBar;
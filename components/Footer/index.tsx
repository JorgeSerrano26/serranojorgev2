import classNames from 'classnames';
import styles from './styles.module.scss'

const Wave = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#EFF6FF" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>;
const Footer = () => {
    const footerClassnames = classNames(
        styles.footer,
        'pt-3 pb-3 relative bg-blue-50 z-10')

    return <footer className={footerClassnames}>
        <Wave />
        <p className="font-bold text-center z-10 text-gray-900">
            Made with <span role="img" aria-label="Coffee icon">☕</span> & <span role="img" aria-label="White heart">🤍</span>
        </p>
    </footer>
}

export default Footer;
import classNames from 'classnames';
const Footer = () => {
    const footerClassnames = classNames('pt-3 pb-3 relative bg-blue-50 z-10')

    return <footer className={footerClassnames}>
        <p className="font-bold text-center z-10 text-gray-900">
            Made with <span role="img" aria-label="Coffee icon">☕</span> & <span role="img" aria-label="White heart">🤍</span>
        </p>
    </footer>
}

export default Footer;
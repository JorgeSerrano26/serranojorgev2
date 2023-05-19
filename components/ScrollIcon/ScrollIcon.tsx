import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
    className?: string;
};

const ScrollIcon = ({ className = '' }: Props) => {
    const customClassName = classNames(styles.icon_scroll, {
        [className]: className.length,
    });

    return <div className={customClassName}></div>;
};

export default ScrollIcon;

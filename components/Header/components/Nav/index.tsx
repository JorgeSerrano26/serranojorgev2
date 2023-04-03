/**
 * Styles
 */
// import '@components/Header/Header.scss';

/**
 * Types
 */
import { INavItem, INavItemProps, INavProps } from './NavTypes';

/**
 * Component
 */
const NavItemChild: React.FC<INavItemProps> = ({ label, link, className, newWindow }) => (<li className={className} >
    <a href={link} {...(newWindow && { target: "_blank" })}>
        {label}
    </a>
</li>
);

const nameSpace = "main_nav";

const Nav: React.FC<INavProps> = ({ items }) => {
    const renderItems = (items: INavItem[]) => items.map((item, index) => <NavItemChild key={`${index}-nav-item-${item.label}`} {...item} className={`${nameSpace}__children`} />);

    return <nav className={nameSpace}>
        <ul>
            {
                renderItems(items)
            }
        </ul>
    </nav>
};

export default Nav;
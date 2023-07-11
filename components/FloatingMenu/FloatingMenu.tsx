import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitch } from '@tabler/icons-react';
import classNames from 'classnames';


type Item = {
    icon: keyof typeof Icons;
    ariaLabel?: string;
    href: string;
    disabled?: boolean;
}

type FloatingMenuProps = {
    items: Item[];
}

const Icons = {
    github: IconBrandGithub,
    linkedin: IconBrandLinkedin,
    twitch: IconBrandTwitch,
}

const MenuItem = ({ icon, ariaLabel = "", href, disabled = false }: Item): JSX.Element => {
    const Icon = Icons[icon];

    const styles = classNames(
        "p-2 flex text-gray-900 ",
        { "cursor-not-allowed text-gray-300 pointer-events-none": disabled},
        { "hover:text-gray-50 hover:bg-gray-900 transition duration-300 ease-in-out": !disabled}
    );

    return <a
        className={styles}
        aria-label={ariaLabel}
        href={href}
        rel="noreferrer"
        target="_blank">{<Icon />}</a>
}

const FloatingMenu = ({ items }: FloatingMenuProps): JSX.Element => {
    return <div className="flex flex-col overflow-hidden z-30 left-3 w-18 bg-gray-50 rounded-md justify-center align-middle fixed top-[50%] translate-y-[-50%] shadow-md ">
        {items.map((el, index) => {
            return <MenuItem key={`floating-menu-item-${index}`} {...el}/>
        })
        }
    </div>
}

export default FloatingMenu;
export interface INavItem {
    label: string;
    link: string;
    newWindow: boolean;
}

export interface INavItemProps extends INavItem {
    className: string;
}

export interface INavProps {
    items: INavItem[];
}

import {
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandTwitch,
	IconFileCv,
} from "@tabler/icons-react";
import classNames from "classnames";

type Item = {
	icon: keyof typeof Icons;
	ariaLabel?: string;
	href: string;
	disabled?: boolean;
	download?: boolean;
	color?: string;
};

export type FloatingMenuProps = {
	items: Item[];
};

const Icons = {
	github: IconBrandGithub,
	linkedin: IconBrandLinkedin,
	twitch: IconBrandTwitch,
	download: IconFileCv,
};

const MenuItem = ({
	icon,
	ariaLabel = "",
	href,
	disabled = false,
	download = false,
	color,
}: Item): JSX.Element => {
	const Icon = Icons[icon] ?? undefined;

	const styles = classNames(
		"flex flex-col p-2 flex bg-gray-50 flex justify-center items-center text-center",
		{
			"cursor-not-allowed text-gray-300 pointer-events-none": disabled,
			"text-gray-900 hover:text-gray-50 hover:bg-gray-900 transition duration-300 ease-in-out":
				!disabled,
		},
	);

	return (
		<a
			className={styles}
			aria-label={ariaLabel}
			href={href}
			rel="noreferrer"
			target={download ? "_self" : "_blank"}
			download={download}
		>
			{Icon && <Icon color={color} />}
			{disabled && (
				<span className="text-xs" aria-label={ariaLabel}>
					soon
				</span>
			)}
		</a>
	);
};

const FloatingMenu = ({ items }: FloatingMenuProps): JSX.Element => {
	return (
		<div className="flex flex-col overflow-hidden z-30 w-18 bg-gray-50 rounded-r-md justify-center align-middle fixed top-[50%] translate-y-[-50%] shadow-md ">
			{items.map((el, index) => {
				return <MenuItem key={`floating-menu-item-${index}`} {...el} />;
			})}
		</div>
	);
};

export default FloatingMenu;

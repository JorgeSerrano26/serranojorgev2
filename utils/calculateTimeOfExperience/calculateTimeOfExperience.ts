import { differenceInMonths, differenceInYears } from "date-fns";

export default function calculateTimeOfExperience(
	from: Date,
	to: Date,
	isWork: boolean,
): string {
	const diffYears = differenceInYears(to, from);

	if (!isWork) {
		const diffYearsShool = diffYears + 1;

		console.log(diffYearsShool);

		if (diffYears < 1) {
			return "Less than year";
		} else if (diffYears === 1) {
			return "1 year";
		}

		return `${diffYearsShool} years`;
	}

	const diffMonths = differenceInMonths(to, from) % 12;

	if (diffYears < 1) {
		return "Menos de 1 año";
	} else if (diffYears === 1 && diffMonths === 0) {
		return "1 año";
	} else if (diffYears === 1) {
		return `1 año y ${diffMonths} meses`;
	} else if (diffMonths === 0) {
		return `${diffYears} años`;
	} else {
		return `${diffYears} años y ${diffMonths} meses`;
	}
}

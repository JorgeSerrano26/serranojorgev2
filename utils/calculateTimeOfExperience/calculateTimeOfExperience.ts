import { differenceInMonths, differenceInYears } from "date-fns";

export default function calcularDiferenciaDeTiempo(
	fechaInicial: Date,
	fechaFinal: Date,
	school = false,
): string {
	let diffYears = differenceInYears(fechaFinal, fechaInicial);
	const diffMonths = differenceInMonths(fechaFinal, fechaInicial) % 12;

	if (diffYears < 1) {
		return "Menos de 1 año";
	}

	if (school) diffYears++;

	if (diffYears === 1 && diffMonths === 0) {
		return "1 año";
	} else if (diffYears === 1) {
		return `1 año y ${diffMonths} meses`;
	} else if (diffMonths === 0) {
		return `${diffYears} años`;
	} else {
		return `${diffYears} años y ${diffMonths} meses`;
	}
}
